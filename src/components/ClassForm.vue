<template>
  <form>
    <div class="uneditable">
      Day:
    </div>
    <div class="uneditableContent" id="day">
      {{ this.lesson.day }}
    </div>
    <div class="uneditable">
      Start:
    </div>
    <div class="uneditableContent">
      {{ this.lesson.start }}
    </div>
    <div class="uneditable">
      End:
    </div>
    <div class="uneditableContent">
      {{ this.lesson.end }}
    </div>
    <label for="inputName">
      Title:
      <input type="text" name="name" id="inputName" v-model="name">
    </label>

    <label for="inputClassroom">
      Classroom:
      <input type="text" name="classroom" id="inputClassroom" v-model="classroom">
      <!--TODO: Change to select + make a request to database for values-->
    </label>

    <label for="inputNote">
      Note:
      <textarea name="note" id="inputNote" cols="30" rows="4" v-model="note"></textarea>
    </label>

    <div class="buttonBox">
      <button class="cancel" @click.prevent="onCancelClicked()">Cancel</button>
      <button class="submit" @click.prevent="onSubmitClicked()">Submit</button>
    </div>
  </form>
</template>
  
<script>
export default {
  name: "ClassForm",
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
  computed: {
    name: {
      get() {
        return this.lesson.name || "";
      },
      set(value) {
        this.$emit("update:lesson", { ...this.lesson, name: value });
      },
    },
    classroom: {
      get() {
        return this.lesson.classroom || "";
      },
      set(value) {
        this.$emit("update:lesson", { ...this.lesson, classroom: value });
      },
    },
    note: {
      get() {
        return this.lesson.note || "";
      },
      set(value) {
        this.$emit("update:lesson", { ...this.lesson, note: value });
      },
    },
  },
  methods: {
    onCancelClicked() {
      this.$emit('closeSidebar');
    },
    onSubmitClicked(){
      // TODO
    }
  }
};
</script>

<style scoped>
@import '../assets/base.css';

form {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: 70%;
  padding: 20px;
}

label {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

input[type="text"],
textarea {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  max-width: 300px;
  font-size: 1rem;
  margin-bottom: 20px;
}

input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 5px var(--primary-color);
}

.uneditable,
.uneditableContent {
  font-size: 1.1rem;
  color: #333;
}

.uneditableContent {
  font-weight: bold;
  margin-bottom: 10px;

}

#day::first-letter {
  text-transform: capitalize;
}

.buttonBox {
  display: flex;
  justify-content: space-between;
}

button.cancel,
button.submit {
  width: 40%;
  min-width: fit-content;
  border: 2px solid;
  border-radius: 8px;
  background-color: transparent;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: bold;
}

button.cancel {
  color: var(--cancel-red);
  border-color: var(--cancel-red);
}

button.submit {
  color: var(--submit-green);
  border-color: var(--submit-green);
}

button.cancel:hover {
  background-color: var(--cancel-red);
  color: var(--vt-c-white-soft);
}

button.submit:hover {
  background-color: var(--submit-green);
  color: var(--vt-c-white-soft);
}
</style>