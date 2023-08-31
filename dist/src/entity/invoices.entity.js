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
exports.InvoicesEntity = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("./user.entity");
var documents_entity_1 = require("./documents.entity");
var foldes_entity_1 = require("./foldes.entity");
var companies_entity_1 = require("./companies.entity");
var clients_entity_1 = require("./clients.entity");
var cost_centers_entity_1 = require("./cost_centers.entity");
var base_model_entity_1 = require("./base.model.entity");
var InvoicesEntity = /** @class */ (function (_super) {
    __extends(InvoicesEntity, _super);
    function InvoicesEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], InvoicesEntity.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'int' }),
        __metadata("design:type", Number)
    ], InvoicesEntity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], InvoicesEntity.prototype, "incoming", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', nullable: true }),
        __metadata("design:type", String)
    ], InvoicesEntity.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
        __metadata("design:type", Date)
    ], InvoicesEntity.prototype, "received_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
        __metadata("design:type", Date)
    ], InvoicesEntity.prototype, "sent_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'int', nullable: true }),
        __metadata("design:type", Number)
    ], InvoicesEntity.prototype, "delivery_type", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', nullable: true }),
        __metadata("design:type", String)
    ], InvoicesEntity.prototype, "notes", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
        __metadata("design:type", Date)
    ], InvoicesEntity.prototype, "liquidated_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'int', nullable: true }),
        __metadata("design:type", Number)
    ], InvoicesEntity.prototype, "ordinal_number", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.UserEntity; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", user_entity_1.UserEntity)
    ], InvoicesEntity.prototype, "liquidated_by", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return foldes_entity_1.FoldersEntity; }, {
            onDelete: 'SET NULL',
        }),
        __metadata("design:type", foldes_entity_1.FoldersEntity)
    ], InvoicesEntity.prototype, "folder_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.UserEntity; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", user_entity_1.UserEntity)
    ], InvoicesEntity.prototype, "assigned_to", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.UserEntity; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", user_entity_1.UserEntity)
    ], InvoicesEntity.prototype, "responsible", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return cost_centers_entity_1.CostCentersEntity; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", cost_centers_entity_1.CostCentersEntity)
    ], InvoicesEntity.prototype, "cost_center_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return documents_entity_1.DocumentEntity; }, {
            onDelete: 'SET NULL',
        }),
        __metadata("design:type", documents_entity_1.DocumentEntity)
    ], InvoicesEntity.prototype, "document_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return clients_entity_1.ClientsEntity; }, {
            onDelete: 'SET NULL',
        }),
        __metadata("design:type", clients_entity_1.ClientsEntity)
    ], InvoicesEntity.prototype, "client_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return companies_entity_1.CompaniesEntity; }, function (company) { return company.invoice; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", companies_entity_1.CompaniesEntity)
    ], InvoicesEntity.prototype, "company_id", void 0);
    InvoicesEntity = __decorate([
        (0, typeorm_1.Entity)('invoices')
    ], InvoicesEntity);
    return InvoicesEntity;
}(base_model_entity_1.BaseModelEntity));
exports.InvoicesEntity = InvoicesEntity;
//# sourceMappingURL=invoices.entity.js.map