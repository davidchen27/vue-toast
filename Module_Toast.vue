<template>
  <div>
    <transition name="slideDown" appear>
      <div class="toast-wrap">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#icon-${ type }`"></use>
        </svg>
        {{ text }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Module_Toast"
}
</script>

<style scoped>
  .toast-wrap{
    padding: 8px 16px;
    margin-bottom: 10px;
    pointer-events: all;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    background: #fff;
    color: #515a6e;
    font-size: 12px;
  }
  svg{
    margin-right: 3px;
  }
</style>