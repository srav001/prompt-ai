<script setup lang="ts"></script>

<template>
	<div class="w-full border border-neutral-400 text-neutral-400 bg-neutral-900 rounded-md mt-7 p-4">
		What is Propmt Engineering? <a class="underline"> Read our blog post.</a>
	</div>
	<section class="mt-5">
		<article class="rounded-tl-lg rounded-tr-lg bg-neutral-800 p-4 text-neutral-400">
			<p class="text-xs">Prompt</p>
			<div class="p-4 text-soft-white bg-neutral-600 mt-3 rounded-lg">
				<p class="mb-5">
					Given the following fruit, output the closest color hex value that matches the color of that fruit.
				</p>
				<div class="my-2">
					Fruit:
					<br />
					<span class="bg-violet-500 text-sm rounded-full px-[0.4rem]">fruit</span>
				</div>
				<div class="mt-3">
					Color hex string:
					<br />
					<span class="border border-soft-white px-2 rounded-full text-sm">completion</span>
				</div>
			</div>
			<p class="mt-5 text-soft-white">
				Tokens: 31
				<span class="rounded-full cursor-pointer text-sm bg-neutral-400/80 px-[0.27rem] text-neutral-800">?</span>
			</p>
		</article>
		<article class="bg-stone-100 p-4 text-dark-gray">inner text</article>
		<footer
			class="bg-soft-white border border-stone-400 text-dark-gray rounded-bl-lg rounded-br-lg p-4 flex justify-between items-center">
			<div class="flex">
				<div class="mr-5 text-stone-600">
					<span class="text-xs mr-2">Family</span>
					<select class="p-2 rounded-full bg-stone-200 text-xs" value="gpt3" id="family">
						<option value="gpt3">GPT-3</option>
					</select>
				</div>
				<div class="text-stone-600 text-xs">
					<span class="mr-2"> Model </span>
					<select class="p-2 rounded-full bg-stone-200" value="gpt3" id="family">
						<option value="gpt3">GPT-3</option>
					</select>
				</div>
			</div>
			<div class="flex items-center">
				<div class="text-stone-300 text-xs mr-2">
					<span class="border p-1 rounded">key</span>
					+
					<span class="rounded border p-1">Enter</span>
				</div>
				<button
					class="px-3 py-1 text-sm hover:text-dark-gray hover:bg-soft-white transition-colors border shadow-sm bg-dark-gray text-soft-white duration-300 ease-in-out border-dark-gray rounded hover:border-dark-gray cursor-pointer mr-2">
					RUN
				</button>
				<button class="px-3 py-1 text-sm text-dark-gray border rounded border-dark-gray">SAVE</button>
			</div>
		</footer>
	</section>
</template>
