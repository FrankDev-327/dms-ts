import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddOrdinalNumberToDocumentTable1693382306111
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'documents',
      new TableColumn({
        name: 'ordinal_number',
        type: 'integer',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
