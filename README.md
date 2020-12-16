# React Native 学习先导篇

**`使用 JavaScript 和 React 编写原生移动应用`**

## React Native 应用是真正的移动应用

RN 产出的 不是'网页应用'，或者'HTML5 应用'，又或者'混合应用'。

最终产品是一个真正的移动应用，从使用感受上和用 Object-C 或 Java 编写的应用几乎无法区分。

RN 所使用的 基础 UI 组件 和原生应用完全一致。

你要做的就是把这些基础 UI 组件使用 JavaScript 和 React 组合起来。

```js
import React, { Component } from "react";
import { Image, ScrollView, Text } from "react-native";

class AwkwardScrollingImageWithText extends Component {
	render() {
		return (
			<ScrollView>
				<Image
					source={{ uri: "https://i.chzbgr.com/full/7345954048/h7E2C65F9/" }}
					style={{ width: 320, height: 180 }}
				/>
				<Text>
					在iOS上，React Native的ScrollView组件封装的是原生的UIScrollView。
					在Android上，封装的则是原生的ScrollView。 在iOS上，React
					Native的Image组件封装的是原生的UIImageView。
					在Android上，封装的则是原生的ImageView。 React
					Native封装了这些基础的原生组件，使你在得到媲美原生应用性能的同时，还能受益于React优雅的架构设计。
				</Text>
			</ScrollView>
		);
	}
}
```

## 完美兼容原生组件

React Native 完美兼容使用 Objective-C、Java 或是 Swift 编写的组件。

如果你需要针对应用的某一部分特别优化，中途换用原生代码编写也很容易。

想要应用的一部分用原生，一部分用 React Native 也完全没问题 —— Facebook 的应用就是这么做的。

```js
import React, { Component } from "react";
import { Text, View } from "react-native";
import { TheGreatestComponentInTheWorld } from "./your-native-code";

class SomethingFast extends Component {
	render() {
		return (
			<View>
				<TheGreatestComponentInTheWorld />
				<Text>
					上面这个TheGreatestComponentInTheWorld组件完全可以使用原生Objective-C、
					Java或是Swift来编写 - 开发流程并无二致。
				</Text>
			</View>
		);
	}
}
```

# 入门基础

## 搭建开发环境

### 1、Window + Android

- `安装依赖`

  必须安装的依赖：Node、JDK 和 Android Studio

  > 虽然你可以使用任何编辑器来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。

- `Node、JDK`

  注意 Node 的版本应大于等于 12，而 JDK 的版本必须是 1.8（目前不支持 1.9 及更高版本，注意 1.8 版本官方也直接称 8 版本）。安装完 Node 后建议设置 npm 镜像（淘宝源）以加速后面的过程（或使用科学上网工具）。

  > 注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

  ```js
  # 使用nrm工具切换淘宝源
  npx nrm use taobao

  # 如果之后需要切换回官方源可使用
  npx nrm use npm
  ```

- `Android 开发环境`

  - 1、安装 Android Studio

    [官方链接](https://developer.android.com/studio)

  - 2、安装 Android SDK

    Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是 Android 10 (Q)版本的 SDK（注意 SDK 版本不等于终端系统版本，RN 目前支持 android4.1 以上设备）。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。

    > SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是 Appearance & Behavior → System Settings → Android SDK。

  - 3、配置 ANDROID_HOME 环境变量

    打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量 -> 新建，创建一个名为 ANDROID_HOME 的环境变量（系统或用户变量均可），指向你的 Android SDK 所在的目录（具体的路径请自行确认）

    `SDK 默认是安装在下面的目录：`

    > `c: \Users\你的用户名\AppData\Local\Android\Sdk;`

    你可以在 Android Studio 的"Preferences"菜单中查看 SDK 的真实路径，具体是 Appearance & Behavior → System Settings → Android SDK。

    你需要关闭现有的命令符提示窗口然后重新打开，这样新的环境变量才能生效。

  - 4、把一些工具目录添加到环境变量 Path 中

    打开控制面板 -> 系统和安全 -> 系统 -> 高级系统设置 -> 高级 -> 环境变量，选中 Path 变量，然后点击编辑。点击新建然后把这些工具目录路径添加进去：platform-tools、emulator、tools、tools/bin

    ```js
    %ANDROID_HOME%\platform-tools
    %ANDROID_HOME%\emulator
    %ANDROID_HOME%\tools
    %ANDROID_HOME%\tools\bin
    ```

- `准备Android设备`

  `可以使用模拟器，也可以使用真机`

  - 使用 Android 真机

    使用 USB 数据线连接电脑，然后选择数据传输模式-允许所有操作

  - 使用 Android 模拟器

    打开 Android Studio，'Tool->AVD Manager'，新建你的虚拟设备

- `创建新项目`

  ```js
  // 注意，这里的npx是使用nrm工具切换淘宝源
  npx nrm use taobao
  // 如果之后需要切换回官方源可使用
  npx nrm use npm

  npx react-native init AwesomeProject
  ```

- `编译并运行你的 React Native 应用`

  确保你先运行了模拟器或者连接了真机，然后在你的项目目录中运行 yarn android 或者 yarn react-native run-android：

  ```js
  cd yourProject
  yarn android
  # 或者
  yarn react-native run-android
  ```

- `跑起来咯，开心咩~`

## 核心组件与原生组件

### 1、原生组件

在 Android 开发中是使用 kotlin 或 java 来编写视图；在 IOS 开发中则使用 swift 或 Obejct-c 来编写视图。

在 RN 中，则使用 React 组件通过 javascript 来调整这些视图。运行时，R 会为这些组件创建 Android 和 IOS 视图。

因为 RN 组件就是对原生视图的封装，因此使用其开发效果及性能与原生所差无几。故将这些平台支持的组件称为原生组件。

### 2、核心组件

RN 具有很多核心组件，从表单控件到活动指示器，应有尽有。可以在 [API 文档](https://www.reactnative.cn/docs/components-and-apis) 中找到他们。

主要用到以下组件：

| RN 的 UI 组件  | Android View   | IOS View         | Web Analog            | 描述                                                               |
| :------------- | :------------- | :--------------- | :-------------------- | :----------------------------------------------------------------- |
| `<View>`       | `<ViewGroup>`  | `<UIView>`       | 一个非滚动的`<div>`   | 一个支持带有 flexbox、样式、一些触摸处理和可访问性控件的布局的容器 |
| `<Text>`       | `<TextView>`   | `<UITextView>`   | `<p>`                 | 显示、样式和嵌套文本字符串，甚至处理触摸事件                       |
| `<Image>`      | `<ImageView>`  | `<UIImageView>`  | `<img>`               | 展示不同类型的图片                                                 |
| `<ScrollView>` | `<ScrollView>` | `<UIScrollView>` | `<div>`               | 可以包含多组件和视图的滚动容器                                     |
| `<TextInput>`  | `<EditText>`   | `<UITextFiled>`  | `<input type="text">` | 允许输入内容                                                       |

### 3、组件

```js
import React from "react";
import { Text, View } from "react-native";

const HelloWorldApp = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Hello, world!</Text>
		</View>
	);
};
export default HelloWorldApp;
```

新建一个项目，然后用上面的代码覆盖你的 App.js 文件，然后运行看看。

上面的代码定义了一个名为 HelloWorldApp 的新的组件（Component）。你在编写 React Native 应用时，肯定会写出很多新的组件。而一个 App 的最终界面，其实也就是各式各样的组件的组合。

**`组件本身结构可以非常简单——唯一必须的就是在render方法中返回一些用于渲染结构的 JSX 语句。`**

**`自定义组件，export default出function/class，然后建一个 index.js 来统一管理这些自定义组件，index.js中使用export 导出 各个自定义组件的对象，如：`**

```js
// A组件
import React from "react";
import { Text, View } from "react-native";
export default function A(props) {
	return (
		<View>
			<Text>Hello, I am {props.name}</Text>
		</View>
	);
}
// B组件
import React from "react";
import { Text, View } from "react-native";
export default function B(props) {
	return (
		<View>
			<Text>Hello, I am {props.name}</Text>
		</View>
	);
}
// index.js
import A from "./A"; // 自己注意路径
import B from "./B"; // 自己注意路径
export { A, B };
```
