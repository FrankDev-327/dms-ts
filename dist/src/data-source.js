"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var ormconfig_1 = require("../ormconfig");
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource(ormconfig_1.typeOrmConfig);
//# sourceMappingURL=data-source.js.map