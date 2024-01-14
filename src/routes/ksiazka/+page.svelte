<script>
	export let data;
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition'

</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
<main class="flex flex-col items-center justify-center min-h-screen py-2">
	<div
		class="flex flex-col w-full max-w-md px-4 py-8 rounded-lg shadow card sm:px-6 md:px-8 lg:px-10"
	>
		<h2 class="self-center p-12 mb-6 text-xl font-light variant-soft card h1 sm:text-2xl">
			Explore Our Recipes
		</h2>
		<div class="mt-8">
			{#each data.categories as category}
				{#if category.recipes.length > 0}
					<div transition:slide={{duration:500}} class="mb-4">
						<h3 class="text-lg font-semibold">{category.name}</h3>
						<div class="flex flex-col mb-2">
							{#each category.recipes as recipe}
								<div transition:slide={{duration:500}} class="flex flex-row mb-2">
									<div class="grid grid-cols-[1fr_auto_auto] w-full px-3 py-2 rounded-lg shadow">
										<div class="flex items-center">
											<h3 class="text-lg font-semibold">{recipe.title}</h3>
										</div>
										<a class="btn variant-ghost-primary" href="/{recipe.id}" rel="ugc">
											View Recipe
										</a>
										<form use:enhance method="POST">
											<input type="hidden" name="id" value={recipe.id}>
											<button
												type="SUBMIT"
												class="btn variant-ghost-error"
												>Delete
											</button>
										</form>
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
