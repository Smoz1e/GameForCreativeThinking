"""drop unique username

Revision ID: 7b2c0d5d1f14
Revises: 969d3fc8743a
Create Date: 2026-05-12 18:10:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '7b2c0d5d1f14'
down_revision: Union[str, Sequence[str], None] = '969d3fc8743a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_index('ix_users_username', table_name='users')
    op.create_index(op.f('ix_users_username'), 'users', ['username'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_users_username'), table_name='users')
    op.create_index('ix_users_username', 'users', ['username'], unique=True)
