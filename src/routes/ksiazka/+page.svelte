<script>
	export let data;
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
<main class="flex flex-col items-center justify-center min-h-screen py-2">
	<div class="flex flex-col w-full max-w-md px-4 py-8 rounded-lg shadow card sm:px-6 md:px-8 lg:px-10">
		<h2 class="self-center p-12 mb-6 text-xl font-light variant-soft card h1 sm:text-2xl">Explore Our Recipes</h2>
		<div class="mt-8">
			{#each data.categories as category}
				{#if category.recipes.length > 0}
					<div class="mb-4">
						<h3 class="text-lg font-semibold">{category.name}</h3>
						<div class="flex flex-col mb-2">
							{#each category.recipes as recipe}
								<div class="flex flex-row mb-2">
									<div class="flex items-center justify-between w-full px-3 py-2 rounded-lg shadow">
										<div class="flex items-center">
											<h3 class="text-lg font-semibold">{recipe.title}</h3>
										</div>
										<a class="btn variant-ghost-primary" href="/{recipe.id}" rel="ugc"> View Recipe </a>
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</main>
