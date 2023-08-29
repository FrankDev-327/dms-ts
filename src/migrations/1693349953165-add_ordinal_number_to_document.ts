import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddOrdinalNumberToDocument1693349953165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'documents',
            new TableColumn({
                name: 'ordinal_number',
                type:'number'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
