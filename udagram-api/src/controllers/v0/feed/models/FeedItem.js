"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let FeedItem = class FeedItem extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    sequelize_typescript_1.Column
], FeedItem.prototype, "caption", void 0);
__decorate([
    sequelize_typescript_1.Column
], FeedItem.prototype, "url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.CreatedAt
], FeedItem.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.UpdatedAt
], FeedItem.prototype, "updatedAt", void 0);
FeedItem = __decorate([
    sequelize_typescript_1.Table
], FeedItem);
exports.FeedItem = FeedItem;
