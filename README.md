<div dir="rtl" style="padding:0 20% 0 20%">

# ברוכים הבאים למעבדה השנייה ב Vue.js !!! <img src="src/assets/logo.png" width="50" height="43.3" alt="Vue.js Logo">

## הכנה

עבור המעבדה הזאת אני מבקש ממכם:

1. לייבא את הקוד [מgithub](https://github.com/SISE-Web-Development-Environments/LAB11)
2. להוריד את התוספים הבאים לvscode:

   - Prettier - Code formatter
   - Vetur

> מומליצים בנוסף:

> - vue - של (jcbuisson.vue)
> - Vue 2 Snippets
> - Vue VSCode Snippets
> - Vue Peek

3. לפתוח את [הדוקומנטציה של Vue](https://vuejs.org/v2/guide/)
4. לפתוח את [מסמך של צורת הכתיבה הנכונה של Vue](https://vuejs.org/v2/style-guide)

## מבוא

במעבדה הזאת נדבר על קומפוננטות ואיך נשתמש בaxios כדי לקבל מידע מהשרת שלנו ולהציג אותו בקומפוננטה מתאימה.

לעומת מעבדה קודמת שבה דיברנו על עמוד הרשמה, היום נדבר על העמוד הראשי שבו נציג מתכונים רנדומלים שנקבל מהשרת.

הקבצים שאיתם תעבדו במעבדה הם [mainPage.vue](src/pages/mainPage.vue) ו [recipePreview.vue](src/components/recipePreview.vue) עבור העמוד הראשי והתצוגה המקדימה (בהתאמה).

## צורת הייבוא של Vue

את Vue אנחנו יכולים לייבא בכמה דרכים.\
במעבדה הקודמת דיברנו על ייבוא באמצעות תג script:

<div id="import" dir="ltr" style="padding-left:15%;">

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

</div>

היום אנחנו נדבר על שימוש ב Vue-cli כך שבאמצעות npm (שלמדנו בחלק של Node) לאחר שהורדנו את Vue, נייבא אותו על ידי:

<div id="import" dir="ltr" style="padding-left:15%;">

```javascript
import Vue from "vue";
```

</div>

Vue-cli ( בפירוט - Vue Command Line Interface) הוא ממשק לקונסול שנותן לנו להריץ כל מני פקודות על מנת לייצר ולנהל את פרויקט הVue שלנו.

Vue-cli מכיל את הפקודה `create` שיוצרת עבורנו פרויקט Vue חדש על פי הגדרות שנבחר ותוריד לנו את כל החבילות הדרושות לאותו פרוויקט (אותם חבילות יורדו לנו על ידי npm וישמרו בnode_modules).

> _כמובן, כמו בNode, אם יבאתם את הrepository של המעבדה שבו הnode_modules לא נמצאים, יש צורך להריץ את הפעולה npm install כדי להוריד את כל המודולים שרשומים בpackage.json._

כחלק מהפרויקט הבסיסי שלנו נוכל למצוא את הקבצים המרכזיים של הפרויקט והם:

- [index.html](public/index.html) - הקובץ html הראשי שכולל את האלמנט שיהיה הtemplate של האובייקט Vue הראשי
- [App.vue](src/App.vue) - הקובץ שמכיל את הקומפוננטה הראשית של הפרויקט
- [main.js](src/main.js) - הקובץ שיוצר את אובייקט הVue הראשי שמקשר את index.html לApp.vue

## **_קומפוננטה_**

קומפוננטה היא אובייקט Vue עם שם שניתן לעשות בה שימוש חוזר.

<div id="import" dir="ltr" style="padding-left:15%;">

In logic section (javascript code):

```javascript
// Define a new component called buttonCounter
Vue.component("buttonCounter", {
  data: function() {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">\
              You clicked me {{ count }} times.\
            </button>'
});

new Vue({ el: "#components-demo" });
```

In template:

```html
<div id="components-demo">
  <buttonCounter></buttonCounter>
  <!-- can reuse -->
  <buttonCounter></buttonCounter>
</div>
```

</div>

כאשר אנחנו מגדירים בצורה הזאת את הקומפוננטה, היא נוספת לנו בצורה גלובלית לספרייה ואין צורך לציין שאנחנו משתמשים בה באובייקט שלנו.

עבודה עם `Vue.component` טובה כשאנחנו מדברים על פרויקט בגודל קטן~בינוני שמשתמש בjavascript רק כדי לתמוך מעט בחלק מהתצוגות.

כאשר אנחנו מדברים על פרויקט יותר מסובך שמתבסס הרבה יותר על javascript, לשיטה הזאת יש כל מני חסרונות כגון:

- הגדרת template בצורת מחרוזת לא נוחה לעבודה, במיוחד שהקומפוננטה יכולה להיות גדולה

- בצורה כזאת אין לנו אפשרות להגדיר עיצוב באמצעות css עבור הקומפוננטה

<!-- No build step restricts us to HTML and ES5 JavaScript, rather than preprocessors like Pug (formerly Jade) and Babel -->

**הדרך השניה שבה נשתמש כדי להגדיר קומפוננטה היא בתוך קובץ נפרד שהוא רשום בפורמט _vue._ (זאת הדרך שנשתמש בה במעבדה הזאת).**

הקובץ הזה יהיה רשום בצורה הבאה:

<div id="import" dir="ltr" style="padding-left:15%;">

<b>fileName.vue :</b>

```html
<template>
  <!-- inside the template tag, there should be one element as a root -->
  <div>
    <!-- ... -->
  </div>
</template>

<script>
  // exporting our component
  export default {
    name: "buttonCounter" // The name of the component
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* ... */
</style>
```

</div>

> _טיפ לכתיבה נכונה: את השם של הקומפוננטה נרשום בcammelCase - אות ראשונה קטנה ואחר כך כל מילה מתחילה באות גדולה_

**[קישור לדוגמאת הקוד](src/components/buttonCounter.vue)**

את הקומפוננטה שהגדרנו בקובץ נייבא באמצעות שימוש בvue-loader המאפשר לנו ליבא קבצי vue.

> vue-loader מורד לנו כמודול עם שאר המודולים בהתחלה והשימוש בו הוא במאחורי הקלעים כך שאנחנו יכולים לייבא קבצי vue **_בלי הצהרה שאנחנו משתמשים בvue-loader._**

כאשר אנחנו משתמשים מתוך אובייקט Vue בקומפוננטה נוכל לאמר מבחינה היררכית שאותה קומפוננטה היא בעצם **child** של אותו אובייקט (Child Component).

בכל פרויקט Vue יהיה לנו את האובייקט הראשי שלנו שלרוב יהיה מוגדר בקובץ **App.vue:**

<div id="import" dir="ltr" style="padding-left:15%;">

```html
<template>
  <div id="app">
    <buttonCounter />
  </div>
</template>

<script>
  import buttonCounter from "./components/buttonCounter"; // import component from the components directory

  export default {
    name: "App",
    components: {
      buttonCounter
    }
  };
</script>

<style></style>
```

</div>

**[קישור לדוגמאת הקוד](src/App.vue)**

- קומפוננטות שהתוכן שלהם הוא עמוד כמו עמוד ראשי או עמוד הרשמה נרשום בתוך תיקייה בשם pages.

  > - _שימוש **:** בקומפוננטות אלה בדרך כלל נשתמש פעם אחת_

- את שאר הקומפוננטות כמו קומפוננטת תצוגה מקדימה נרשום בתיקיית components.

  > - _שימוש **:** בקומפוננטות אלה בדרך כלל נשתמש יותר מפעם אחת (לא תמיד)_

## <span id="task1" style="color:green;"> <-- משימה 1 --> </span>

**המשימה הראשונה שלכם היא ליצור שני קומפוננטות:**

1. **קומפוננטה של תצוגה מקדימה - שכרגע תכיל את הטקסט "recipe preview".**

2. **קומפוננטה של עמוד ראשי - שתשתמש בקומפוננטה של תצוגה מקדימה (כרגע נתחיל מלהכיל מופע אחד שלה).**

&nbsp;

## **_props של קומפוננטה_**

<div dir="ltr" style="padding-left:15%;">

inside Child Component logic:

```javascript
export default {
  name: "childComponent",
  props: {
    sender: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      required: false,
      default: () => undefined
    }
  }
};
```

Inside Parent's template:

```html
<messageLine sender="Eran" message="hello everyone!!!"></messageLine>
```

</div>

כאשר אנחנו רוצים להעביר מידע לChild Component שניצור, נצהיר בקומפוננטה בתוך שדה props (קיצור של properties) איזה פרמטרים הקומפוננטה יכול לקבל כתכונה.

אותם שדות יהיו לנו חלק מהשדות של האובייקט כמו השדות של data.

עבור כל פרמטר יש לציין:

- שם התכונה
- הסוג
- האם הוא הכרחי
  - אם הוא לא הכרחי, יש לציין פונקציה שמחזירה את הערך הדיפולטי שלו

## <span id="task2" style="color:green;"> <-- משימה 2 --> </span>

**במשימה זו נגדיר את כל הפרמטרים שאנחנו מצפים לקבל בקומפוננטה של תצוגה מקדימה שהם:**

- **הid של המתכון**
- **השם של המתכון**
- **כמות הזמן שלוקח כל תהליך ההכנה**
- **כמות הלייקים**
- **קישור לתמונה של המתכון**

בעבודה תצטרכו גם להתייחס למידע ספציפי למשתמש כמו האם המתכון הוא favorite שלו או האם הוא צפה בו.

## **_v-bind_**

<div dir="ltr" style="padding-left:15%;">

Inside template:

```html
<button v-bind:disabled="!message.length">
  Add new message
</button>
```

Inside Vue object:

```javascript
data(){
  return {
    message: ""
  };
}
```

</div>

מאפשר לנו ליצור one-way binding בין משתנה של אובייקט Vue ל attribute

צורת הכתיבה תיהיה:

<div dir="ltr" style="padding-left:15%;">

```
v-bind:AttributeName="variable"
```

</div>

בצורה מקוצרת במקום לרשום **:v-bind** , נרשום **:**

<div dir="ltr" style="padding-left:15%;">

```html
<button :disabled="flag">Click me!</button>
```

</div>

**[קישור לדוגמאת הקוד](src/components/disableButton.vue)**

כאשר דיברנו בסוף המעבדה הקודמת על v-for, דיברנו שיש אפשרות להצמיד לelement באיטרציה property בשם key שייחד אותו משאר האלמנטים.\
הkey בעצם binded לפרמטר של המשתנה שעליו אנחנו עוברים ולכן נרשום אותו בצורה הבאה:

<div dir="ltr" style="padding-left:15%;">

```html
<div v-for="m in messages" :key="m.time">
  {{ message }}
</div>
```

</div>

[עוד על v-bind](https://vuejs.org/v2/api/#v-bind)

## <span id="task4" style="color:green;"> <-- משימה 4 --> </span>

כעת עם מה שלמדנו נוכל ליצור מעבר על רשימת המתכונים וליצור עבור כל אחד אלמנט מסוג קומפוננטת התצוגה המוקדמת.

לשם כך אתם צריכים:

1. ***

## **_axios_**

בregister של מעבדה קודמת ואיך נשלח ונקבל ונטפל בבקשה

## <span id="task5" style="color:green;"> <-- משימה 5 --> </span>

**_להוסיף את הבקשה שפונה לשרת שלהם/ לשרת בסיס שלי_**

## **_עמוד ראשי - הצגת תצוגות מקדימות של מתכונים רנדומליים_**

אחר כל איך ליצור עמוד שמשתמש בv-for (כמעט רשמתי ng-for) כדי ליצור שכפול של הקומפוננטה שיצרנו עד עכשיו אחרי שקיבלנו את המידע מaxios שאני אבנה להם את הבקשה בשרת שלי עבורה או שישתמשו בשלהם

</div>
