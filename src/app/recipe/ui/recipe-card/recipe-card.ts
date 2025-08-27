import { ChangeDetectionStrategy, Component, input, output, signal, SimpleChanges } from '@angular/core';
import { CategoryNamePipe } from '../../util/category-name-pipe';
import { Category } from '../../data/category.model';
import { Recipe } from '../../data/recipe.model';
import { NewRecipeBadge } from '../../util/new-recipe-badge';

@Component({
  selector: 'app-recipe-card',
  imports: [CategoryNamePipe, NewRecipeBadge],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeCard {
  recipe = input<Recipe>();
  categories = input<Category[]>();
  clickEvent = output<string>();

  resizedImageUrl = signal<string | undefined>(undefined);
  placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNmM2YzZjUiLz48L3N2Zz4=';

  async ngOnInit() {
    await this.resizeImage();
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['recipe']) {
      await this.resizeImage();
    }
  }

  async resizeImage() {
    const imagePath = this.recipe()?.imagePath;
    if (!imagePath) return;
    this.resizedImageUrl.set(await this.downscaleImage(imagePath, 400, 240));
  }

  async downscaleImage(url: string, maxWidth: number, maxHeight: number): Promise<string> {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height, 1);
        const w = Math.round(img.width * ratio);
        const h = Math.round(img.height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, w, h);
        try {
          const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
          resolve(dataUrl);
        } catch {
          resolve(url);
        }
      };
      img.onerror = () => resolve(url);
      img.src = url;
    });
  }

}
