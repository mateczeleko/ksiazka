<script>
	export let data;
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>
<main class="p-4 md:p-6">
	<div
		class="max-w-3xl mx-auto border rounded-lg shadow-sm variant-glass-tertiary bg-card text-card-foreground"
		data-v0-t="card"
	>
		<div class="flex flex-col space-y-1.5 p-6">
            <div class="flex justify-center p-4 card variant-glass-tertiary">{data.recipe[0].category.name}</div>
			<h3 class="text-2xl font-bold tracking-tight">{data.recipe[0].title}</h3>
		</div>
		<div class="p-6">
			<div class="grid gap-6">
				<div>
					<h2 class="text-xl font-semibold">Ingredients</h2>
					<ul class="ml-5 space-y-1 list-disc">
                        {#each data.recipe[0].recipeIngredients as item}
                             <li>{item.ingredient.name}</li>
                             {/each}
					</ul>
				</div>
				<div>
					<h2 class="text-xl font-semibold">Instructions</h2>
					<ol class="ml-5 space-y-1">
                    <li>{data.recipe[0].instructions}</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
</main>
