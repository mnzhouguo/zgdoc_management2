## 1. 目录结构
- [1. 目录结构](#1-目录结构)
- [2. 课程目标](#2-课程目标)
- [3. 华为鲲鹏生态](#3-华为鲲鹏生态)
  - [3.1. 人工智能落地四要素](#31-人工智能落地四要素)
- [4. 人工智能基础](#4-人工智能基础)
  - [4.1. 泰勒展开式](#41-泰勒展开式)
  - [4.2. sign函数](#42-sign函数)
  - [4.3. exp函数 自然常数](#43-exp函数-自然常数)
  - [4.4. 霍夫丁不等式（Hoeffding）](#44-霍夫丁不等式hoeffding)
  - [4.5. 对数函数 log2为底数](#45-对数函数-log2为底数)
  - [4.6. 拉格朗日乘数法](#46-拉格朗日乘数法)
  - [4.7. 梯度向量](#47-梯度向量)
  - [4.8. 偏差与方差](#48-偏差与方差)
- [5. 相关工具](#5-相关工具)

## 2. 课程目标

## 3. 华为鲲鹏生态
### 3.1. 人工智能落地四要素

华为AI培训相关.drawio.svg

- 数据
  
- 算法
  
  > 大矩阵的计算，传统CPU无法满足计算要求，基于CUBE的计算与传统CPU块8000倍；
  
- 算力
  
  >人工智能芯片（NPU），昇腾处理器，针对数据中心与边缘节点的计算要求，华为针对不同的应用场景，不同的计算要求等，提供多系列的昇腾硬件系列；

  > 设备主要分为：推理设备（高清视频分析等），训练场；

- 场景
- 工具
  > 华为MindSpore
  
![image-20220713142152683](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713142152683.png)

![image-20220713142303022](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713142303022.png)

![image-20220713143409870](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713143409870.png)

![image-20220713143845011](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713143845011.png)

![image-20220713144551230](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713144551230.png)

![image-20220713150026604](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713150026604.png)

![image-20220713150536049](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713150536049.png)

![image-20220713150718936](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713150718936.png)

![image-20220713150921952](D:\code\doc\zgdoc-technology\documents\09_AI\images\image-20220713150921952.png)


[http-bw]:https://lbwa.github.io/images/post/http-protocol/http-bw.svg

## 4. 人工智能基础

### 4.1. 泰勒展开式

### 4.2. sign函数
sign函数 符号函数，用于取某个数据的 符号（正或负，
比如：x>0 时sign(x)=1
x<0 时sign(x)=-1
x=0 时 sign(x)=0

### 4.3. exp函数 自然常数
一篇关于exp自然常数的说明很不错的文件，重点讲了自然数e的来源，以及怎样跟我们现实案例联系起来的。
> https://mp.weixin.qq.com/s?__biz=MjM5MDE3OTk2Ng==&mid=2657437820&idx=1&

### 4.4. 霍夫丁不等式（Hoeffding）

### 4.5. 对数函数 log2为底数
LOG2（N）相当于2的多少次方（立方）等于N 例如：LOG2（8）=3 相当于，2的3次方等于8

### 4.6. 拉格朗日乘数法
https://blog.csdn.net/tjcwt2011/article/details/80938400ji

知乎上比较直观的体现出
https://www.zhihu.com/question/38586401?sort=created

### 4.7. 梯度向量
梯度向量可以理解为

线性与非线性

### 4.8. 偏差与方差

偏差是指离实际值的距离，而方差是指数据的离散程度，如下图：


过拟合：

过拟合是指为了让训练集精度更高，学到了很多”仅在训练集上成立的规律“，导致换一个数据集当前规律就不适用了

## 5. 相关工具

* 数学工具神器
https://mathpix.com/

天江志、s
https://gitee.com/zhijiangtianshu


问题

训练与推理（预测）

