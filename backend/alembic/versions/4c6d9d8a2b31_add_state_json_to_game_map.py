"""add state json to game map

Revision ID: 4c6d9d8a2b31
Revises: 7b2c0d5d1f14
Create Date: 2026-05-12 19:10:00.000000

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '4c6d9d8a2b31'
down_revision: Union[str, Sequence[str], None] = '7b2c0d5d1f14'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column('game_map', sa.Column('state_json', sa.Text(), nullable=False, server_default='{}'))
    op.alter_column('game_map', 'state_json', server_default=None)


def downgrade() -> None:
    op.drop_column('game_map', 'state_json')