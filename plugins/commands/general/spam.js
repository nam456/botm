const config = {
  name: "spam",
  description: "spam spam spam",
  usage: "[ná»™i dung]",
  cooldown: 3,
  permissions: [2],
  credits: "",
}

if (!global.spam) {
  global.spam = [];
}

async function onCall({ message, args }) {
  const isStop = args[0]?.toLowerCase() === "stop";
  if (isStop) {
    const index = global.spam.indexOf(message.threadID);
    if (index > -1) {
      global.spam.splice(index, 1);
      return message.reply("BVN THA TỤI BÂY ĐÓ");
    } else {
      return message.reply("CHẠY LÀ LŨ NGU");
    }
  } else {
    const spam_content = args.join(" ");

    if (spam_content.length === 0) {
      return message.reply("spam đê");
    }

    if (global.spam.indexOf(message.threadID) > -1) {
      return message.reply("Äang spam rá»“i, vui lÃ²ng dá»«ng trÆ°á»›c khi spam tiáº¿p");
    } else {
      global.spam.push(message.threadID);
      while (global.spam.indexOf(message.threadID) > -1) {
        message.send(spam_content).catch(e => { console.error(e) });
        await new Promise(resolve => setTimeout(resolve, 6500)); // delay 3000 mili giÃ¢y = 3 giÃ¢y
      }
    }
  }
}

export default {
  config,
  onCall
}