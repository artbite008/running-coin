# 项目概述
这个项目可能是一个跑步打卡类的应用，包含后端服务和微信小程序等部分，用于记录跑步成就、投票、获取跑步币等功能。
# Project Overview
This project could be a running check-in application that includes backend services and a WeChat Mini Program. Its features include recording running achievements, voting, earning running coins, and more.
# 主要功能模块
# Main Functional Modules
## 后端服务
1. 数据访问层（DAO）：包含各种 SQL 语句生成器，如 GroupSqlProvider、VoteRecordSqlProvider、UserInfoSqlProvider 等，用于生成插入、更新、删除等 SQL 语句。
2. 数据模型（Model）：定义了各种数据实体，如 Group、VoteRecord、UserInfo 等，包含实体的属性和对应的 getter/setter 方法。
3. 控制器（Controller）：处理前端请求，如 FrontController 中的 getUserWeeklyReport 方法，用于获取用户的周报告；LoginController 中的 onLoginV2 方法，用于处理用户登录请求。
4. 定时任务（Job）：如 TargetFreshJob 类，定义了一个定时任务，每周一 00:00:01 执行，用于刷新目标数据。
## Backend Services
1. Data Access Layer (DAO): Responsible for generating SQL statements for database operations.
2. Data Model (Model): Defines entities and their attributes for representing data in the system.
3. Controllers: Handles HTTP requests from the frontend and interacts with the business logic layer.
4. Scheduled Jobs (Job): Executes periodic tasks, such as processing daily running results or refreshing weekly targets.   
## 微信小程序
提供用户界面，用于用户进行跑步记录、投票等操作。
## WeChat Mini Program
Provides the user interface for users to record running achievements, vote, and interact with other features.
## 版本信息
目前记录的版本为 v0.1.0，主要功能包括：
1. 初始发布跑步币后端服务和微信应用。
2. 设置每周跑步目标，范围从 7km 到 25km，且目标可随时更新。
3. 记录每次 3km 到 8km 的跑步成就，每天可记录多次。
4. 对队友的跑步记录进行点赞或踩，在结果确定前可更改。
5. 每天晚上 11:00 执行批处理作业，确定跑步结果。
6. 根据投票结果将跑步状态更新为有效或无效。
7. 根据跑步结果获得跑步币。
## Version Information
The current recorded version is v0.1.0, with the following main features:
1. Initial release of the running coin backend service and WeChat Mini Program.
2. Users can set weekly running goals ranging from 7km to 25km, and these goals can be updated at any time.
3. Records running achievements between 3km and 8km per session, allowing multiple entries per day.
4. Allows users to like or dislike teammates' running records, with the ability to change their votes before finalization.
5. Executes batch processing jobs at 11:00 PM daily to confirm running results.
6. Updates running statuses based on voting results, marking them as valid or invalid.
7. Awards running coins based on the confirmed running results.
