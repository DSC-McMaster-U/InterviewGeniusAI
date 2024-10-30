import re
from dataclasses import dataclass, asdict

@dataclass
class CleanedData:
    content: str