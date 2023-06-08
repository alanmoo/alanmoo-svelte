<!-- TODO: Style this differently if its first child is an anchor. Or at least make the links look good. -->

<div class="card">
  <slot></slot>
</div>


<style>
  .card {
    border: 1px solid var(--theme-cyan);
    border-radius: .5em;
    padding: .5rem 1rem;
    flex: 1;
  }
</style>