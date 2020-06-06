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
במעבדה הקודמת דיברנו על ייבוא באמצעות תג script שמכיל לינק למודול:

<div id="import" dir="ltr" style="padding-left:15%;">

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

</div>

<!-- היום אנחנו נדבר על שימוש ב Vue-cli כך שבאמצעות npm (שלמדנו בחלק של Node) לאחר שהורדנו את Vue, נייבא אותו על ידי: -->

היום אנחנו נדבר על שימוש בnpm כך שלאחר שהורדנו את Vue, נייבא אותו על ידי:

<div id="import" dir="ltr" style="padding-left:15%;">

```javascript
import Vue from "vue";
```

</div>

כמו שדיברתם בהרצאה, את הקבצים של המעבדה יצרנו באמצעות הפקודה `create` של
Vue-cli.

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

<b>ButtonCounter.vue :</b>

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
    name: "ButtonCounter" // The name of the component
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* ... */
</style>
```

</div>

<i>

> טיפים לכתיבה נכונה:
>
> - את השם של הקומפוננטה נרשום PascalCase - כל מילה מתחילה באות גדולה
>   אחת הסיבות היא להיוודל מאלמנטים בסייסיים של HTML שכולם באותיות קטנות
> - השם של הקובץ שבו שמורה קומפוננטה יהיה זהה לשם של הקומפוננטה
> - אם נרשום כמה קומפוננטות שקשורות אחת לשניה ננסה לדאוג שprefix יהיה דומה

</i>

**[קישור לדוגמאת הקוד](src/components/buttonCounter.vue)**

את הקומפוננטה שהגדרנו בקובץ נייבא באמצעות import בזכות ההגדרות שvue-cli הגדיר לנו עבור הרצה של הפרויקט.

> מאחורי הקלעים ישנו שימוש בספריית `vue-loader`, (שהתקנו דרך השימוש ב `Vue-cli`), שמאפשר לנו את ייבוא הקמפוננטות בדרך זו.

כאשר אנחנו משתמשים מתוך אובייקט Vue בקומפוננטה נוכל לאמר מבחינה היררכית שאותה קומפוננטה היא **child** של אותו אובייקט (Child Component).

בכל פרויקט Vue יהיה לנו את הקומפוננטה הראשית שלנו שלרוב תהיה מוגדרת בקובץ **App.vue:**

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

אנו יכולים לראות בדוגמא זו, שימוש בקומפוננטה בתוך קומפוננטה אחרת.

> כפי שדיברנו בעבר, אפליקציית Vue היא למעשה עץ היררכי של קומפוננטות כך שקיים אובייקט Vue שהוא הroot של העץ.

**[קישור לדוגמאת הקוד](src/App.vue)**

- קומפוננטות שהתוכן שלהם הוא למעשה עמוד - מכיל עיצוב מסוים וספציפי לו, כמו עמוד ראשי או עמוד הרשמה, נרשום בתוך תיקייה בשם pages.

> - _שימוש **:** בקומפוננטות אלה בדרך כלל נשתמש פעם אחת_

- לעומת זאת, קומפוננטות שהן רכיבים של עמוד, כמו קומפוננטת תצוגה מקדימה, נרשום בתיקיית components.

  > - _שימוש **:** בקומפוננטות אלה בדרך כלל נשתמש יותר מפעם אחת (לא תמיד)_

- ישנם שני סוגים עיקריים של קומפוננטות:
  - **קומפוננטות גלובאליות:** בהן נרצה לעשות שימוש חוזר לאורך כל האפליקציה - בעמודים שונים - לדוגמא: תצוגה מקדימה של מתכון
  - **:קומפוננטות לוקאליות** בהן נעשה שימוש, בתוך קומפוננטת אב כלשהי - כאשר אנו כותבים כמו עם לוגיקה מורכבת, אנו רוצים להפריד אותו לרכיבים/קומפוננטות, כך כל רכיב ישב בקומפוננטה ובקובץ משלו. בצורה זו אנו מחלקים את הקוד לרכיבים לוגיים ו ומאפשרים תחזוקה והבנה קלה של הקוד (מודולים)

## <span id="task1" style="color:green;"> <-- משימה 1 --> </span>

**המשימה הראשונה שלכם היא ליצור שתי קומפוננטות:**

1. **קומפוננטה של תצוגה מקדימה - שכרגע תכיל את הטקסט "recipe preview".**

2. **קומפוננטה של עמוד ראשי - שתשתמש בקומפוננטה של תצוגה מקדימה (_כרגע נתחיל מלהכיל מופע אחד שלה_).**

&nbsp;

## **_props של קומפוננטה_**

<div dir="ltr" style="padding-left:15%;">

inside Child Component logic:

```javascript
export default {
  name: "childComponent",
  props: {
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
<messageLine message="hello everyone!!!" />
```

</div>

כאשר אנו רוצים להעביר מידע ל Child-Component,
עלינו לטפל בשני חלקים בקוד:

1. בהגדרת הקומפוננטה - נוסיף שדה בשם props (קיצור לproperties).

   שדה זה הינו אובייקט, אשר בתוכו נגדיר את כל השדות שאנחנו רוצים לקבל מקופוננטת האב.

   אותם שדות יהיו לנו חלק מהשדות של הקומפוננטה כמו השדות של data.

2) בtemplate, בתוך תגית הקומפוננטה בה אנו עושים שימוש, עבור כל שדה בprops אנחנו צריכים לספק ערך.

עבור כל פרמטר יש לציין:

- שם התכונה
- הסוג
- האם הוא הכרחי
  - אם הוא לא הכרחי, יש לציין פונקציה שמחזירה את הערך הדיפולטי שלו

_שימו לב - במידה וברצנוכם להעביר כמות גדולה של שדות, יש לשקול שליחה של אובייקט במקום שדות נפרדים._

## <span id="task2" style="color:green;"> <-- משימה 2 --> </span>

**במשימה זו נגדיר את כל הפרמטרים שאנחנו מצפים לקבל בקומפוננטה של תצוגה מקדימה שהם:**

- **הid של המתכון**
- **השם של המתכון**
- **כמות הזמן שלוקח כל תהליך ההכנה**
- **קישור לתמונה של המתכון**
- **כמות הלייקים**

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

## <span id="task3" style="color:green;"> <-- משימה 3 --> </span>

**כעת עם מה שלמדנו נוכל ליצור מעבר על רשימת המתכונים וליצור עבור כל אחד אלמנט מסוג קומפוננטת התצוגה המוקדמת.**

**לשם כך אתם צריכים רשימת מתכונים בעמוד הראשי שלנו (נתחיל מרשימה שאנחנו ניצור ידנית)**

<div dir="ltr" style="padding-left:15%;">

```javascript
recipes: [
  {
    id: 641726,
    title: "Dulce De Leche Brownies",
    readyInMinutes: 45,
    image: "https://spoonacular.com/recipeImages/641726-556x370.jpg",
    aggregateLikes: 29
  },
  {
    id: 651389,
    title: "Medenjaci - Croatian Honey Spice Cookies",
    readyInMinutes: 45,
    image: "https://spoonacular.com/recipeImages/651389-556x370.jpg",
    aggregateLikes: 6
  }
];
```

</div>

## **_axios_**

בregister של מעבדה קודמת ואיך נשלח ונקבל ונטפל בבקשה

## <span id="task5" style="color:green;"> <-- משימה 5 --> </span>

**_להוסיף את הבקשה שפונה לשרת שלהם/ לשרת בסיס שלי_**

## **_עמוד ראשי - הצגת תצוגות מקדימות של מתכונים רנדומליים_**

אחר כל איך ליצור עמוד שמשתמש בv-for (כמעט רשמתי ng-for) כדי ליצור שכפול של הקומפוננטה שיצרנו עד עכשיו אחרי שקיבלנו את המידע מaxios שאני אבנה להם את הבקשה בשרת שלי עבורה או שישתמשו בשלהם

</div>
