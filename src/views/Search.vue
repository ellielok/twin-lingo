<template>
  <div class="container py-4">
    <h2 class="mb-4">Find Support Near You</h2>

    <form>
      <div class="input-group">
        <input
          v-model="query"
          type="text"
          class="form-control"
          placeholder="Search for a suburb or postcode"
          aria-label="Search"
          required
        />
        <button class="btn btn-primary" type="submit">Search</button>
      </div>
    </form>
  </div>
</template>
