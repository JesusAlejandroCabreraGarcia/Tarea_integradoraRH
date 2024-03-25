<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared2/BaseBreadcrumb.vue';
import EditableTable from '@/components/table2/EditableTable.vue';
// theme breadcrumb
const page = ref({ title: 'Lista de instructores' });

const breadcrumbs = ref([
    {
        text: '2 Nuevos instructores',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-card elevation="10">
        <v-card-text>
            <EditableTable />
        </v-card-text>
    </v-card>
</template>
