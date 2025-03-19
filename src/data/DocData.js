const document = [
  {
    id: "install",
    mheading: "Getting started",
    heading: " Installation",
    code: `npm i name`,
  },
  {
    id: "keyGen",
    mheading: "Use",
    heading: "Key Generation",
    code: `import { generateKeyPair} from name;

// Generate Key Pair (Public Key, Private Key)
const { publicKey, privateKey } = await generateKeyPair();`,
  },
  {
    id: "sign",
    heading: "Sign",
    code: `import {sign} from name;

// Sign
const token = await sign({ message: "Hello World!" }, privateKey);`,
  },
  {
    id: "verify",
    heading: "Verify",
    code: `import { verify } from "./index.js";

// Verify
const verification = await verify(token, publicKey);`,
  },
  {
    id: "decode",
    heading: "Decode",
    code: `import { decode } from "./index.js";

// Decode
const payload = await decode(token);`,
  },
  {
    id: "dilithium",
    mheading: "Algorithm",
    heading: "Dilithium",
    content: [
      {
        heading: "What is Dilithium?",
        body: `Dilithium is a post-quantum digital signature algorithm designed to be secure against attacks from both classical and quantum computers. It was selected as part of the NIST Post-Quantum Cryptography (PQC) Standardization Process to replace traditional digital signature schemes like RSA and ECDSA, which are vulnerable to quantum attacks.

Dilithium is based on lattice-based cryptography, a field of cryptography that relies on the hardness of certain mathematical problems related to high-dimensional lattices. These problems are believed to be resistant even to quantum computers.`,
      },
      {
        heading: "How Does Dilithium Work?",
        body: [
          {
            point: "Key Generation",
            body: `The private key consists of two small random polynomials.
                  The public key is derived by multiplying these polynomials with a larger matrix (also using modular arithmetic).
                  The structure of the key generation ensures that even with a quantum computer, recovering the private key from the public key remains infeasible.`,
          },
          {
            point: " Verifying a Signature",
            body: `The private key consists of two small random polynomials.
                  The public key is derived by multiplying these polynomials with a larger matrix (also using modular arithmetic).
                  The structure of the key generation ensures that even with a quantum computer, recovering the private key from the public key remains infeasible.`,
          },
          {
            point: "Key Generation",
            body: `The private key consists of two small random polynomials.
                  The public key is derived by multiplying these polynomials with a larger matrix (also using modular arithmetic).
                  The structure of the key generation ensures that even with a quantum computer, recovering the private key from the public key remains infeasible.`,
          },
        ],
      },
      {
        heading: "Why is Dilithium Important?",
        body: [
          {
            point: "Quantum-Safe Security",
            body: "It is resistant to attacks from quantum computers, unlike RSA or ECDSA.",
          },
          {
            point: "Fast Verification",
            body: "Verifying signatures is efficient, making it suitable for high-performance applications.",
          },
          {
            point: "Small Key Sizes (Compared to Other PQC Algorithms)",
            body: "While larger than RSA or ECC keys, Dilithium keys are more compact than some other post-quantum alternatives.",
          },
          {
            point: "Standardization by NIST",
            body: "It is part of NIST’s post-quantum cryptography standardization, making it a likely candidate for future cryptographic systems.",
          },
        ],
      },
    ],
  },
];

export default document;
