"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentEntity = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var foldes_entity_1 = require("./foldes.entity");
var companies_entity_1 = require("./companies.entity");
var base_model_entity_1 = require("./base.model.entity");
var DocumentEntity = /** @class */ (function (_super) {
    __extends(DocumentEntity, _super);
    function DocumentEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], DocumentEntity.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], DocumentEntity.prototype, "ocr_text", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], DocumentEntity.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.UserEntity; }),
        __metadata("design:type", user_entity_1.UserEntity)
    ], DocumentEntity.prototype, "created_by", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.UserEntity; }),
        __metadata("design:type", user_entity_1.UserEntity)
    ], DocumentEntity.prototype, "edited_by", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.UserEntity; }, function (user) { return user.assignedTo; }, {
            onDelete: 'SET NULL',
        }),
        (0, typeorm_1.JoinColumn)({ name: 'user_assigned_to_id' }),
        __metadata("design:type", user_entity_1.UserEntity)
    ], DocumentEntity.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return companies_entity_1.CompaniesEntity; }, function (company) { return company.document; }, {
            onDelete: 'CASCADE',
        }),
        (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
        __metadata("design:type", companies_entity_1.CompaniesEntity)
    ], DocumentEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return foldes_entity_1.FoldersEntity; }, function (folder) { return folder.document; }, {
            onDelete: 'CASCADE',
        }),
        (0, typeorm_1.JoinColumn)({ name: 'folder_id' }),
        __metadata("design:type", foldes_entity_1.FoldersEntity)
    ], DocumentEntity.prototype, "folder", void 0);
    DocumentEntity = __decorate([
        (0, typeorm_1.Entity)('documents')
    ], DocumentEntity);
    return DocumentEntity;
}(base_model_entity_1.BaseModelEntity));
exports.DocumentEntity = DocumentEntity;
//# sourceMappingURL=documents.entity.js.map