<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared-instructores/BaseBreadcrumb.vue';
import EditableTable from '@/components/table-instructores/EditableTable.vue';
// theme breadcrumb
const page = ref({ title: 'Instructor' });

const breadcrumbs = ref([
    {
        text: '2 Nuevos Instructores',
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
