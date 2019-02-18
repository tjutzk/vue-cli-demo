<template>
  <div class="router-item" :class="{active: routerItem.active}">
    <span>{{routerItem.name}}</span>
    <i class="close" @click.stop="onRomoveItem(routerItem)">X</i>
  </div>
</template>

<script>
const EVENTS = {
  REMOVE_ITEM: "remove-item"
};

export default {
  props: {
    routerItem: {
      type: Object,
      default: function() {
        return {
          name: "home",
          active: true
        };
      }
    }
  },
  methods: {
    onRomoveItem(item) {
      this.$emit(EVENTS.REMOVE_ITEM, item);
    }
  }
};
</script>
<style scoped>
.router-item {
  width: 100px;
  padding: 5px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
}
.router-item.active {
  background: #49f;
  color: #fff;
  border: none;
}
.close {
  width: 20px;
  text-align: center;
  font-style: normal;
  font-size: 12px;
}
</style>

