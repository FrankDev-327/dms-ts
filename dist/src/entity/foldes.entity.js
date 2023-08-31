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
exports.FoldersEntity = void 0;
var typeorm_1 = require("typeorm");
var companies_entity_1 = require("./companies.entity");
var folder_enum_1 = require("../enums/folder.enum");
var base_model_entity_1 = require("./base.model.entity");
var documents_entity_1 = require("./documents.entity");
var clients_entity_1 = require("./clients.entity");
var FoldersEntity = /** @class */ (function (_super) {
    __extends(FoldersEntity, _super);
    function FoldersEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], FoldersEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], FoldersEntity.prototype, "parent_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            enum: folder_enum_1.DocumentType,
            default: folder_enum_1.DocumentType.Documents,
        }),
        __metadata("design:type", String)
    ], FoldersEntity.prototype, "section", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return companies_entity_1.CompaniesEntity; }, function (company) { return company.folder; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", companies_entity_1.CompaniesEntity)
    ], FoldersEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return documents_entity_1.DocumentEntity; }, function (document) { return document.folder; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", documents_entity_1.DocumentEntity)
    ], FoldersEntity.prototype, "document", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return clients_entity_1.ClientsEntity; }, function (client) { return client.folder; }),
        (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
        __metadata("design:type", Array)
    ], FoldersEntity.prototype, "client", void 0);
    FoldersEntity = __decorate([
        (0, typeorm_1.Entity)('folders')
    ], FoldersEntity);
    return FoldersEntity;
}(base_model_entity_1.BaseModelEntity));
exports.FoldersEntity = FoldersEntity;
//# sourceMappingURL=foldes.entity.js.map