<script type="ts" setup>
import ListGroup from '@/components/ListGroup.vue';
</script>

<template>
    <h2 id="skill">
        前端技術
    </h2>
    <div class="row pt-3">
        <div class="col-md-3 mb-3 mb-md-0">
            <ListGroup></ListGroup>
        </div>
        <div class="col-md-9">
            <router-view></router-view>
        </div>
    </div>
</template>


