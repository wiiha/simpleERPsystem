"""empty message

Revision ID: f425c8c21dfe
Revises: 
Create Date: 2020-03-07 17:22:41.180109

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f425c8c21dfe'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_nr', sa.String(length=50), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('price', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_product_name'), 'product', ['name'], unique=False)
    op.create_index(op.f('ix_product_product_nr'), 'product', ['product_nr'], unique=True)
    op.create_table('stock_location',
    sa.Column('stock_nr', sa.Integer(), nullable=False),
    sa.Column('city', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('stock_nr')
    )
    op.create_index(op.f('ix_stock_location_city'), 'stock_location', ['city'], unique=True)
    op.create_table('transaction',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.Column('stock_nr', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=False),
    sa.Column('inbound', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['product_id'], ['product.id'], ),
    sa.ForeignKeyConstraint(['stock_nr'], ['stock_location.stock_nr'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_transaction_timestamp'), 'transaction', ['timestamp'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_transaction_timestamp'), table_name='transaction')
    op.drop_table('transaction')
    op.drop_index(op.f('ix_stock_location_city'), table_name='stock_location')
    op.drop_table('stock_location')
    op.drop_index(op.f('ix_product_product_nr'), table_name='product')
    op.drop_index(op.f('ix_product_name'), table_name='product')
    op.drop_table('product')
    # ### end Alembic commands ###