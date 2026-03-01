<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link
		:to="project.link"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none h-48 w-full object-cover"
			/>
			<div class="text-center px-4 py-6">
				<p
					class="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ project.title }}
				</p>
				<span class="text-lg text-ternary-dark dark:text-ternary-light">
					{{ project.category }}
				</span>
			</div>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
