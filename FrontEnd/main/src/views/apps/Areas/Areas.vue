<script setup lang="ts">
import { ref } from 'vue';
// common components
import BaseBreadcrumb from '@/components/shared-areas/BaseBreadcrumb.vue';
import EditableTable from '@/components/table-areas/EditableTable.vue';
// theme breadcrumb
const page = ref({ title: 'Areas' });

const breadcrumbs = ref([
    {
        text: 'Se agrego una nueva area',
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
