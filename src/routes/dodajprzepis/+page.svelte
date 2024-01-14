<script>
	const arr = ['1', '2', '3', '4'];
	export let data;
	import { enhance } from '$app/forms';
	// console.log(data);
</script>

<!-- {#each data.categories as item}
	<div>{item.id}</div>
{/each} -->
<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<div class="w-full max-w-md mx-auto">
	<div class="card variant-soft">
		<div class="flex flex-col space-y-1.5 p-6">
			<h3 class="text-2xl font-semibold leading-none tracking-tight">Add a New Recipe</h3>
			<p class="text-sm text-muted-foreground">Share your favorite recipe with the world!</p>
		</div>
		<div class="p-6">
			<form method="POST" use:enhance class="grid gap-4">
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="title">Recipe Title</label
					><input
						class="input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						id="title"
						name="title"
						placeholder="Enter the title of your recipe"
					/>
				</div>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="description">Description</label
					><textarea
						class="input flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						id="description"
						name="description"
						placeholder="Describe your recipe"
					></textarea>
				</div>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="category"
					>
						Category
					</label>
					<div class="grid grid-cols-3 gap-4 p-4 space-y-2">
						{#each data.categories as category, i}
							<div class="flex items-center space-x-2">
								<label
									class="flex items-center gap-4 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									for="category-{category.id}"
									><input
										class="radio"
										type="radio"
										name="category"
										value={category.id}
										id="category-{category.id}"
										checked={0 === i}
									/>
									{category.name}
								</label>
							</div>
						{/each}
					</div>
				</div>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="ingredients">Ingredients</label
					>
					<select class="select" name=ingredients multiple value={['1', '2']}>
						{#each data.ingredients as ingredient}
							 
							 <option value="{ingredient.id}">{ingredient.name}</option>
							 {/each}
					</select>
				</div>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="instructions">Instructions</label
					><textarea
						class="input flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						id="instructions"
						name="instructions"
						placeholder="Step by step instructions"
					></textarea>
				</div>
				<button
					class="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md variant-ghost-tertiary btn ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
					type="submit">Add Recipe</button
				>
			</form>
		</div>
	</div>
</div>
