<script setup lang="ts">
import { FormKitSchema } from "@formkit/vue";
import { ref, computed } from "vue";
import { MultiCompiler } from "webpack";

const schema = [
  {
    $formkit: "text",
    name: "name",
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

const url = "https://getform.io/f/bb6e7762-b593-4686-999e-4819c69c5409"

interface Data {
  name: string | null;
  email: string | null;
  asunto: string | null;
  hasEmail: boolean;
}

const data = ref({
  name: null,
  email: null,
	asunto: null,
  hasEmail: false,
});

const handleSubmit = (params: Data) => {
	const json = JSON.parse(JSON.stringify(params));
  const formData = new FormData();
  for (const key in json) {

    if (json.hasOwnProperty(key) && json[key as keyof Data] !== null) {
      formData.append(key, json[key as keyof Data] as string);
    }
  }

  fetch(url, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  console.log("submit", params, json, formData);
  alert("Envío correcto");
};

</script>

<template>
<FormKit type="form" v-model="data" @submit="handleSubmit">
  <FormKitSchema :schema="schema" :data="data" />
</FormKit>

</template>