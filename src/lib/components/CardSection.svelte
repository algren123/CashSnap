<script>
    export let title = "";
    export let bg = "bg-initial";
    export let styles = "";
    export let sectionStyles = "flex-col";
</script>

<div class="card p-8 flex {bg} flex-col justify-center {styles}">
    {#if title}
         <h3 class="h3 font-bold space-y-4 text-center" data-toc-ignore>{title}</h3>
    {/if}
    <section class="py-4 flex {sectionStyles}"><slot /></section>
</div>