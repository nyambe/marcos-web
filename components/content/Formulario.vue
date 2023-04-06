<script setup lang="ts">
import { FormKitSchema } from "@formkit/vue";
import { ref, computed } from "vue";
import { MultiCompiler } from "webpack";

const schema = [
  {
    $formkit: "text",
    name: "nombre",
    label: "Nombre completo",
    placeholder: "Cómo te llamas?..."
  },
	{
    $formkit: "textarea",
    name: "asunto",
    label: "Asunto",
    placeholder: "Asunto del mensaje"
  },
  {
    $formkit: "email",
    name: "email",
    label: "Email",
    validation: "required|email",
  },
];

const data = ref({
  name: null,
  email: null,
	asunto: null,
  hasEmail: false,
});

const handleSubmit = (e: Event) => {
	console.log('llega')

		if (e.target instanceof HTMLFormElement) {
		const formData = new FormData(e.target);

		fetch("https://getform.io/f/bb6e7762-b593-4686-999e-4819c69c5409", {
				method: "POST",
				body: formData,
				headers: {
						"Accept": "application/json",
				},
		})
		.then(response => console.log(response))
		.catch(error => console.log(error))


		console.log("submit", data.value, e.target, formData);
		alert("Valid submit!")
	}

};

</script>

<template>
<FormKit type="form" v-model="data" @submit="handleSubmit">
  <FormKitSchema :schema="schema" :data="data" />
</FormKit>

<pre>
{{ data }}
</pre>
</template>