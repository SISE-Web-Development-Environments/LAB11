<template>
  <div>
    <ol>
      <MessageLine
        v-for="m in messages"
        :key="m.timestamp"
        :sender="m.sender"
        :message="m.message"
        :timestamp="m.timestamp"
      ></MessageLine>
    </ol>
  </div>
</template>

<script>
import MessageLine from "../components/MessageLine";
export default {
  components: {
    MessageLine
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
