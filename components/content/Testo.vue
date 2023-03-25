<template>
	<div class="w-full h-64 bg-green-100">
	<h2><ContentSlot :use="$slots.default" unwrap="p" /> </h2>
		<ul>
		
	<ContentSlot :use="$slots.navegacion" unwrap="p" />		
	</ul>
	</div>
</template>