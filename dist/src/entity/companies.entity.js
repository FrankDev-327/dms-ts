"use strict";
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
exports.CompaniesEntity = void 0;
var typeorm_1 = require("typeorm");
var contracts_entity_1 = require("./contracts.entity");
var invoices_entity_1 = require("./invoices.entity");
var clients_entity_1 = require("./clients.entity");
var foldes_entity_1 = require("./foldes.entity");
var cost_centers_entity_1 = require("./cost_centers.entity");
var documents_entity_1 = require("./documents.entity");
var CompaniesEntity = /** @class */ (function () {
    function CompaniesEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], CompaniesEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], CompaniesEntity.prototype, "license_id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], CompaniesEntity.prototype, "created", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], CompaniesEntity.prototype, "updated", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CompaniesEntity.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CompaniesEntity.prototype, "oib", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], CompaniesEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], CompaniesEntity.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], CompaniesEntity.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cost_centers_entity_1.CostCentersEntity; }, function (cost) { return cost.company; }),
        (0, typeorm_1.JoinColumn)({ name: 'const_center_id' }),
        __metadata("design:type", Array)
    ], CompaniesEntity.prototype, "const_center", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return foldes_entity_1.FoldersEntity; }, function (folder) { return folder.company; }),
        (0, typeorm_1.JoinColumn)({ name: 'folder_id' }),
        __metadata("design:type", Array)
    ], CompaniesEntity.prototype, "folder", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return documents_entity_1.DocumentEntity; }, function (document) { return document.company; }),
        (0, typeorm_1.JoinColumn)({ name: 'document_id' }),
        __metadata("design:type", Array)
    ], CompaniesEntity.prototype, "document", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return clients_entity_1.ClientsEntity; }, function (client) { return client.company; }),
        (0, typeorm_1.JoinColumn)({ name: 'client_id' }),
        __metadata("design:type", Array)
    ], CompaniesEntity.prototype, "client", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return invoices_entity_1.InvoicesEntity; }, function (invoice) { return invoice.company_id; }),
        (0, typeorm_1.JoinColumn)({ name: 'invoice_id' }),
        __metadata("design:type", Array)
    ], CompaniesEntity.prototype, "invoice", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return contracts_entity_1.ContractsEntity; }, function (contract) { return contract.company_id; }),
        (0, typeorm_1.JoinColumn)({ name: 'contract_id' }),
        __metadata("design:type", Array)
    ], CompaniesEntity.prototype, "contract", void 0);
    CompaniesEntity = __decorate([
        (0, typeorm_1.Entity)('companies')
    ], CompaniesEntity);
    return CompaniesEntity;
}());
exports.CompaniesEntity = CompaniesEntity;
//# sourceMappingURL=companies.entity.js.map