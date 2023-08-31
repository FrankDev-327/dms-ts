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
exports.ClientsEntity = void 0;
var typeorm_1 = require("typeorm");
var foldes_entity_1 = require("./foldes.entity");
var companies_entity_1 = require("./companies.entity");
var base_model_entity_1 = require("./base.model.entity");
var ClientsEntity = /** @class */ (function (_super) {
    __extends(ClientsEntity, _super);
    function ClientsEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "oib", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "telephone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Number)
    ], ClientsEntity.prototype, "zipCode", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], ClientsEntity.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Boolean)
    ], ClientsEntity.prototype, "supplier", void 0);
    __decorate([
        (0, typeorm_1.Column)('uuid', { nullable: true }),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "folder_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClientsEntity.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return companies_entity_1.CompaniesEntity; }, function (company) { return company.client; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", companies_entity_1.CompaniesEntity)
    ], ClientsEntity.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return foldes_entity_1.FoldersEntity; }, {
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", foldes_entity_1.FoldersEntity)
    ], ClientsEntity.prototype, "folder", void 0);
    ClientsEntity = __decorate([
        (0, typeorm_1.Entity)('clients')
    ], ClientsEntity);
    return ClientsEntity;
}(base_model_entity_1.BaseModelEntity));
exports.ClientsEntity = ClientsEntity;
//# sourceMappingURL=clients.entity.js.map