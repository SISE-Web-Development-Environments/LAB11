<div dir="rtl" style="padding:0 20% 0 20%">

# ברוכים הבאים למעבדה השנייה ב Vue.js !!! <img src="src/assets/logo.png" width="50" height="43.3" alt="Vue.js Logo">

## הכנה

עבור המעבדה הזאת אני מבקש ממכם:

1. 
2. לייבא את הקוד [מgithub](https://github.com/SISE-Web-Development-Environments/LAB11)
3. להוריד את התוספים הבאים לvscode:
   - Prettier - Code formatter
   - Vetur
   - vue - של (jcbuisson.vue)
   - Vue 2 Snippets
   - Vue VSCode Snippets
   - Vue Peek
4. לפתוח את [הדוקומנטציה של Vue](https://vuejs.org/v2/guide/)
5. לפתוח את [מסמך של צורת הכתיבה הנכונה של Vue](https://vuejs.org/v2/style-guide)


## מבוא

במעבדה הזאת נדבר על קומפוננטות ואיך נשתמש בaxios כדי לקבל מידע מהשרת שלנו ולהציג אותו בקומפוננטה מתאימה.

לעומת מעבדה קודמת שבה דיברנו על עמוד הרשמה, היום נדבר על העמוד הראשי שבו נציג מתכונים רנדומלים שנקבל מהשרת.

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

אם נריץ את הפקודה `vue create PROJECT_NAME` יפתח לנו הוראות שבסופם יווצר לנו template ראשוני ובנוסף יורד לנו אוטומטית כל הספריות הבסיסיות עבור הרצה של Vue באמצעות npm.

כמובן, כמו בNode, אם יבאתם את הrepository של המעבדה שבו הnode_modules לא נמצאים, יש צורך להריץ את הפעולה npm install כדי להוריד את כל המודולים שרשומים בpackage.json.

## **_החלוקה של הקבצים ומה המשמעות בקצרה של כל קובץ_**

## **_קומפוננטה_**

קומפוננטה היא אובייקט Vue עם שם שניתן לעשות בה שימוש חוזר.

<div id="import" dir="ltr" style="padding-left:15%;">

In template:

```html
<div id="components-demo">
  <buttonCounter></buttonCounter>
  <!-- can reuse -->
  <buttonCounter></buttonCounter>
</div>
```

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

</div>

כאשר אנחנו מגדירים בצורה הזאת את הקומפוננטה, היא נוספת לנו בצורה גלובלית ואין צורך לציין שאנחנו משתמשים בה באובייקט שלנו.

עבודה עם `Vue.component` טובה כשאנחנו מדברים על פרויקט בגודל קטן~בינוני שמשתמש בjavascript רק כדי לתמוך מעט בחלק מהתצוגות.

כאשר אנחנו מדברים על פרויקט יותר מסובך שמתבסס הרבה יותר על javascript, לשיטה הזאת יש כל מני חסרונות:

- הגדרת template בצורת מחרוזת לא נוחה לעבודה, במיוחד שהקומפוננטה יכולה להיות גדולה

- בצורה כזאת אין לנו אפשרות להגדיר עיצוב באמצעות css עבור הקומפוננטה

- ההגדרות הגלובליות מאלצות אותנו לתת שמות ייחודיים עבור כל קומפוננטה

<!-- No build step restricts us to HTML and ES5 JavaScript, rather than preprocessors like Pug (formerly Jade) and Babel -->

**הדרך השניה שבה נשתמש כדי להגדיר קומפוננטה היא בתוך קובץ נפרד שהוא רשום בפורמט _vue._ (זאת הדרך שנשתמש בה במעבדה הזאת).**

הקובץ הזה יהיה רשום בצורה הבאה:

<div id="import" dir="ltr" style="padding-left:15%;">

fileName.vue :

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

את הקומפוננטה שהגדרנו בקובץ נייבא באמצעות שימוש בvue-loader.

> מכיוון שאנחנו הורדנו את vue-loader כמודול עם שאר המודולים בהתחלה אנחנו יכולים לייבא את החבילה **_בלי הצהרה שאנחנו משתמשים בvue-loader._**

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

> קומפוננטות שהתוכן שלהם הוא עמוד כמו עמוד ראשי או עמוד הרשמה נרשום בתוך תיקייה בשם pages.
>
> > בקומפוננטות אלה בדרך כלל נשתמש פעם אחת

> את שאר הקומפוננטות כמו קומפוננטת תצוגה מקדימה נרשום בתיקיית components.
>
> > בקומפוננטות אלה בדרך כלל נשתמש יותר מפעם אחת (לא תמיד)

## <span id="task1" style="color:green;"> <-- משימה 1 --> </span>

**המשימה הראשונה שלכם היא ליצור שני קומפוננטות:**

- קומפוננטה של תצוגה מקדימה - שכרגע תכיל את הטקסט "recipe preview".

- קומפוננטה של עמוד ראשי - שתשתמש בקומפוננטה של תצוגה מקדימה (כרגע נתחיל מלהכיל מופע אחד שלה).

## **_props של קומפוננטה_**



כאשר אנחנו רוצים להעביר מידע לChild Component שניצור, נצהיר בקומפוננטה בתוך props איזה שדות הקומפוננטה יכול לקבל ומאיזה type.

אותם שדות יהיו לנו חלק מהשדות של האובייקט כמו השדות של data.

## <span id="task3" style="color:green;"> <-- משימה 3 --> </span>

**_להגדיר את כל הprops של קומפוננטת תצוגה מקדימה_**

- ## **_v-bind_**

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

[עוד על v-bind](https://vuejs.org/v2/api/#v-bind)

כאשר דיברנו בסוף המעבדה הקודמת על v-for, דיברנו שיש אפשרות להצמיד לelement באיטרציה key שייחד אותו משאר האלמנטים. את הkey הגדרנו באמצעות v-bind בצורה הזאת:

<div dir="ltr" style="padding-left:15%;">

```html
<div v-for="m in messages" :key="m.time">
  {{ message }}
</div>
```

</div>

## <span id="task4" style="color:green;"> <-- משימה 4 --> </span>

במעבדה הקודמת דיברנו ש

**_מה שהיה בתרגול קודם input של country יהפוך להיות select_**

## **_axios_**

בregister של מעבדה קודמת ואיך נשלח ונקבל ונטפל בבקשה

## <span id="task5" style="color:green;"> <-- משימה 5 --> </span>

**_להוסיף את הבקשה שפונה לשרת שלהם/ לשרת בסיס שלי_**

## **_עמוד ראשי - הצגת תצוגות מקדימות של מתכונים רנדומליים_**

אחר כל איך ליצור עמוד שמשתמש בv-for (כמעט רשמתי ng-for) כדי ליצור שכפול של הקומפוננטה שיצרנו עד עכשיו אחרי שקיבלנו את המידע מaxios שאני אבנה להם את הבקשה בשרת שלי עבורה או שישתמשו בשלהם

</div>
