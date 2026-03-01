<script>
export default {
	props: ['projectImages', 'projectInfo'],
};
</script>

<template>
	<div class="mt-12">
		<div class="flex flex-col md:flex-row items-center">
			<!-- Left side - Photo -->
			<div class="w-80">
				<img
					:src="projectImages[0].img"
					class="rounded-xl shadow-lg w-full"
					:alt="projectImages[0].title"
				/>
			</div>

			<!-- Right side - Name -->
			<div class="pl-40 text-right">
				<h1 class="text-3xl md:text-4xl font-bold tracking-wide text-ternary-dark dark:text-ternary-light">
					
				</h1>
			</div>
		</div>
	</div>
</template>

<style scoped>
.font-bold {
	font-weight: 700;
}
</style>
