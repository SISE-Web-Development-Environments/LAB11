<template>
  <ol>
    <messageLine
      v-for="m in messages"
      :key="m.timestamp"
      :sender="m.sender"
      :message="m.message"
      :timestamp="m.timestamp"
    ></messageLine>
  </ol>
</template>

<script>
import messageLine from "../components/messageLine";
export default {
  components: {
    messageLine
  },
  data() {
    return {
      messages: [
        { sender: "Eran", message: "hey! 😁", timestamp: 1 },
        { sender: "Yossi", message: "hey! whats up? 🤷‍♂️", timestamp: 2 },
        { sender: "Eran", message: "i'm good ✌", timestamp: 3 }
      ]
    };
  }
};
</script>
