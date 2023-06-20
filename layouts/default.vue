<template>
	<main class="h-screen w-screen dark:text-soft-white dark:bg-neutral-900 bg-soft-white text-dark-gray py-10 px-20">
		<header class="w-full flex justify-between items-center">
			<h1 class="text-2xl font-bold">LOGO HERE</h1>
			<button class="text-soft-white px-3 py-1 bg-dark-gray rounded-md">LOGIN</button>
		</header>
		<slot />
	</main>
</template>

<style>
* {
	font-family: sans-serif;
}
</style>
