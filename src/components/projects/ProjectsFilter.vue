<template>
	<select
		@change="$emit('filter', $event.target.value)"
		class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
	>
		<option value="">All Projects</option>
		<option value="Web">Web</option>
		<option value="Mobile">Mobile</option>
		<option value="UI/UX">UI/UX</option>
		<option value="Portfolio">Portfolio</option>
	</select>
</template>

<script>
export default {
	name: 'ProjectsFilter'
};
</script>