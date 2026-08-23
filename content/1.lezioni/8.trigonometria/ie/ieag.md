# [Bisettrici di un triangolo]{.text-red}

Per calcolare il valore della bisettrice $$AD$$ dell'angolo $$\alpha$$ [calcoliamo le aree]{.text-blue} dei due triangoli $$ADB$$ e $$ADC$$ in cui il triangolo $$ABC$$ viene diviso dalla bisettrice.

Ponendo poi che la somma delle aree dei due triangoli $$ADB$$ e $$ADC$$ equivala all'area del triangolo $$ABC$$ potremo trovare il valore $$d_a$$ della bisettrice.

Area del triangolo $$ADB$$
$$
\textcolor{red}{A_s(ADB) = \frac{1}{2} c d_a \sin \frac{\alpha}{2}}
$$

Area del triangolo $$ADC$$
$$
\textcolor{red}{A_s(ADC) = \frac{1}{2} b d_a \sin \frac{\alpha}{2}}
$$

Area del triangolo $$ABC$$
$$
\textcolor{red}{A_s(ABC) = \frac{1}{2} b c \sin \alpha}
$$

Essendo $$A_s(ADC) + A_s(ADB) = A_s(ABC)$$ avremo:

$$
\textcolor{red}{\frac{1}{2} c d_a \sin \frac{\alpha}{2} + \frac{1}{2} b d_a \sin \frac{\alpha}{2} = \frac{1}{2} b c \sin \alpha}
$$

Moltiplico tutti i termini per $$2$$ ed ottengo:

$$
\textcolor{blue}{c d_a \sin \frac{\alpha}{2} + b d_a \sin \frac{\alpha}{2} = b c \sin \alpha}
$$

Ora raccolgo $$d_a$$:

$$
\textcolor{blue}{d_a (c+b) \sin \frac{\alpha}{2} = b c \sin \alpha}
$$

Ricavo $$d_a$$:

$$
\textcolor{blue}{d_a = \frac{b c \sin \alpha}{(b + c) \sin \frac{\alpha}{2}}}
$$

Per la [formula di duplicazione]{.text-blue} so che $$\sin \alpha = 2 \sin \frac{\alpha}{2} \cos \frac{\alpha}{2}$$:

$$
\textcolor{blue}{d_a = \frac{2 b c \sin \frac{\alpha}{2} \cos \frac{\alpha}{2}}{(b + c) \sin \frac{\alpha}{2}}}
$$

Semplifico ed ottengo la formula finale:

$$
\textcolor{red}{d_a = \frac{2 b c \cos \frac{\alpha}{2}}{b + c}}
$$

E quindi, ricavando le varie bisettrici $$d_a$$, $$d_b$$, $$d_c$$, avremo le formule:

$$
\textcolor{blue}{d_a = \frac{2 b c \cos \frac{\alpha}{2}}{b + c}}
$$

$$
\textcolor{blue}{d_b = \frac{2 a c \cos \frac{\beta}{2}}{a + c}}
$$

$$
\textcolor{blue}{d_c = \frac{2 a b \cos \frac{\gamma}{2}}{a + b}}
$$