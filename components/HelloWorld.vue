<template>
     <div>HomeContent: {{ name }} - {{ age }} -- {{ length }}</div>
</template>
​
<script>
export default {
    data() {
        return {
            name: 'HomeContent',
            age: 20,
            length: 20,
        }
    }
};
</script>