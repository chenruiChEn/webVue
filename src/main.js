// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'es6-promise/auto'
import 'element-ui/lib/theme-chalk/index.css';  //饿了吗ui
import i18n from './common/lang/index'        //国际化插件
import store from './store/index.js'          //状态管理
import globalMixin from './mixin/globalMixin.js'  //全局mixins
import formDate from './mixin/formDate.js'   // formDate 时间格式化
import './style/base.less'

//全局 formDate 时间格式化
Vue.prototype.$formDate = formDate;

//全局mixins
Vue.mixin(globalMixin)



//自定义指令  用来设置每个页面的 title标签
Vue.directive('title', {
  inserted: function (el, binding) {
    // console.log(el.dataset);
    document.title = el.dataset.title
  }
})

window.$newDate = function (time,month,day) {
  if(time&&month){
    day = day || 0;
    time =  new Date(time,month,day).getTime();
  }else {
    time = time || new Date().getTime();
  }
  time = new Date(time).getTime()+new Date(time).getTimezoneOffset() * 60000+3600000 * 8;   //格式化时间为北京时间
  return new Date(time);
}


import {
   Pagination,
  // Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  Input,
  // InputNumber,
  Radio,
  // RadioGroup,
  // RadioButton,
  Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Switch,
  // Select,
  // Option,
  // OptionGroup,
  // Button,
  // ButtonGroup,
  Table,
  TableColumn,
  // DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  Tabs,
  // TabPane,
  // Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  // Row,
  // Col,
  // Upload,
  // Progress,
  // Badge,
  // Card,
  // Rate,
  // Steps,
  // Step,
  // Carousel,
  // CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(Pagination);
// Vue.use(Dialog.name,Dialog);
// Vue.use(Autocomplete);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(InputNumber);
Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(RadioButton);
Vue.use(Checkbox);
// Vue.use(CheckboxButton);
// Vue.use(CheckboxGroup);
// Vue.use(Switch);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(OptionGroup);
// Vue.use(Button);
// Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
// Vue.use(DatePicker);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Form);
// Vue.use(FormItem);

// Vue.use(TabPane);
// Vue.use(Tag);
// Vue.use(Tree);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Icon);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Upload);
// Vue.use(Progress);
// Vue.use(Badge);
// Vue.use(Card);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Aside);
Vue.use(Input);
Vue.use(Tabs);
Vue.use(Loading.directive);


Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;















Vue.config.productionTip = false





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,

  components: { App },
  template: '<App/>'
})
