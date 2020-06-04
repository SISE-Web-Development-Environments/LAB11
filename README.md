<div dir="rtl" style="padding:0 20% 0 20%">

# ברוכים הבאים למעבדה השנייה ב Vue.js !!! <img src="src/assets/logo.png" width="50" height="43.3" alt="Vue.js Logo">

## מבוא

במעבדה הזאת נדבר על קומפוננטות ואיך נשתמש בaxios כדי לקבל מידע מהשרת שלנו ולהציג אותו בקומפוננטה מתאימה.

לעומת מעבדה קודמת שבה דיברנו על עמוד הרשמה, היום נדבר על העמוד הראשי שבו נציג מתכונים רנדומלים שנקבל מהשרת

## צורת הייבוא של Vue

את Vue אנחנו יכולים לייבא בכמה דרכים.\
במעבדה הקודמת דיברנו על ייבוא באמצעות תג script:

<div id="import" dir="ltr" style="padding-left:15%;">

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

</div>

היום אנחנו נדבר על שימוש ב Vue-cli כך שבאמצעות npm שלמדנו בNode נוריד את Vue:

<div id="import" dir="ltr" style="padding-left:15%;">

```
npm i vue
```

</div>

אם נריץ את הפקודה `vue create PROJECT_NAME` יפתח לנו הוראות שבסופם יווצר לנו template ראשוני ובנוסף יורד לנו אוטומטית כל הספריות הבסיסיות עבור הרצה של Vue באמצעות npm.

כמובן, כמו בNode, אם יבאתם את הrepository של המעבדה שבו הnode_modules לא נמצאים, יש צורך להריץ את הפעולה npm install כדי להוריד את כל המודולים שרשומים בpackage.json.

## **_החלוקה של הקבצים ומה המשמעות בקצרה של כל קובץ_**


## **_קומפוננטה_**

קומפוננטות הם אובייקטיי Vue עם שם שניתן לעשות בהם שימוש חוזר - יותר מפעם אחת.

<div id="import" dir="ltr" style="padding-left:15%;">

template:

```html
<div id="components-demo">
  <button-counter></button-counter>
  <!-- can reuse -->
  <button-counter></button-counter>
</div>
```

component and Vue object:

```javascript
// Define a new component called button-counter
Vue.component("button-counter", {
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

אז הדרך שבה נגדיר קומפוננטה היא בתוך קובץ נפרד שהוא רשום בפורמט **_vue._**

הקובץ הזה יהיה רשום בצורה הבאה:

<div id="import" dir="ltr" style="padding-left:15%;">

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

> *טיפ לכתיבה נכונה: את השם של הקומפוננטה נרשום בcammelCase - אות ראשונה קטנה ואחר כך כל מילה מתחילה באות גדולה*

**[קישור לדוגמאת הקוד](src/components/button-counter.vue)**


את הקומפוננטה שהגדרנו בקובץ נייבא באמצעות שימוש בvue-loader.

> מכיוון שאנחנו הורדנו את vue-loader כמודול עם שאר המודולים בהתחלה אנחנו יכולים לייבא את החבילה ***בלי הצהרה שאנחנו משתמשים בvue-loader.***

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

## <span id="task2" style="color:green;"> <-- משימה 2 --> </span>

**_ליצור קומפוננטה בסיסית שמכילה רק string ולייבא אותה_**

## **_props של קומפוננטה_**

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

מאפשר לנו ליצור one-way binding בין משתנה של אובייקט Vue ל attribute

צורת הכתיבה תיהיה:

<div dir="ltr" style="padding-left:15%;">

```
v-bind:AttributeName="expression"

או

:AttributeName="expression"
```

</div>

</div>

**[קישור לדוגמאת הקוד השלישית](examples/3_data_bindings.html)**

[עוד על v-bind](https://vuejs.org/v2/api/#v-bind)

איך השתמשנו שדיברנו על key ועל value בselect

## <span id="task4" style="color:green;"> <-- משימה 4 --> </span>

**_מה שהיה בתרגול קודם input של country יהפוך להיות select_**

## **_axios_**

בregister של מעבדה קודמת ואיך נשלח ונקבל ונטפל בבקשה

## <span id="task5" style="color:green;"> <-- משימה 5 --> </span>

**_להוסיף את הבקשה שפונה לשרת שלהם/ לשרת בסיס שלי_**

## **_עמוד ראשי - הצגת תצוגות מקדימות של מתכונים רנדומליים_**

אחר כל איך ליצור עמוד שמשתמש בv-for (כמעט רשמתי ng-for) כדי ליצור שכפול של הקומפוננטה שיצרנו עד עכשיו אחרי שקיבלנו את המידע מaxios שאני אבנה להם את הבקשה בשרת שלי עבורה או שישתמשו בשלהם

</div>
