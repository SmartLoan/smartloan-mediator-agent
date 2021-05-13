import { JsonEncoder } from '../JsonEncoder'

describe('JsonEncoder', () => {
  const mockCredentialRequest = {
    prover_did: 'did:sov:4xRwQoKEBcLMR3ni1uEVxo',
    cred_def_id: 'TL1EaPFCZ8Si5aUrqScBDt:3:CL:132:TAG',
    blinded_ms: {
      u:
        '29923358933378594884016949116015048362197910313115517615886712002247549877203754161040662113193681067971700889005059954680562568543707874455462734614770719857476517583732118175472117258262243524371047244612027670795341517678404538774311254888125372395478117859977957781545203614422057872425388379038174161933077364160507888216751250173474993459002409808169413785534283242566104648944508528553665015907898791106766199966107619949762668272339931067050394002255637771035855365582098862561250576470504742036107864292062117797625825433248517924504550308968312780301031964645548333248088593015937359889688860141757860414963',
      ur: null,
      hidden_attributes: ['master_secret'],
      committed_attributes: {},
    },
    blinded_ms_correctness_proof: {
      c: '75472844799889714957212252604198654959564254049476575366093619008804723782477',
      v_dash_cap:
        '241658605435359439784797922191819649424225260343012968028448862434367856520024882808883591559121551472624638941147168471260306900890395947200746462759366134826652687587855065931934069125722728256802714393333799201395529881991611738749782316620019450872378759017790239991970563038638122599532027158669448906627074717578703201192531300159510207969537644782742047266895171574655304024820059682220314444862709893029720461916722147413329108444569762285168314593698192502335045295322386283022390355151395113112616277162501380456415321942055143111557003766356007622317275215637810918710682103087743057471347095588547791117729784209946546040216520440891760010822467637114796927573279512910382694631674566232457443287483928629',
      m_caps: {
        master_secret:
          '10958352359087386063400811574253208318437641929870855399316173807950198557972017190892697250360879224208078813463868425727031560613450102005398401915135973584419891172590586358799',
      },
      r_caps: {},
    },
    nonce: '1050445344368089902090762',
  }

  describe('toBase64', () => {
    test('encodes JSON object to Base64 string', () => {
      expect(JsonEncoder.toBase64(mockCredentialRequest)).toEqual(
        'eyJwcm92ZXJfZGlkIjoiZGlkOnNvdjo0eFJ3UW9LRUJjTE1SM25pMXVFVnhvIiwiY3JlZF9kZWZfaWQiOiJUTDFFYVBGQ1o4U2k1YVVycVNjQkR0OjM6Q0w6MTMyOlRBRyIsImJsaW5kZWRfbXMiOnsidSI6IjI5OTIzMzU4OTMzMzc4NTk0ODg0MDE2OTQ5MTE2MDE1MDQ4MzYyMTk3OTEwMzEzMTE1NTE3NjE1ODg2NzEyMDAyMjQ3NTQ5ODc3MjAzNzU0MTYxMDQwNjYyMTEzMTkzNjgxMDY3OTcxNzAwODg5MDA1MDU5OTU0NjgwNTYyNTY4NTQzNzA3ODc0NDU1NDYyNzM0NjE0NzcwNzE5ODU3NDc2NTE3NTgzNzMyMTE4MTc1NDcyMTE3MjU4MjYyMjQzNTI0MzcxMDQ3MjQ0NjEyMDI3NjcwNzk1MzQxNTE3Njc4NDA0NTM4Nzc0MzExMjU0ODg4MTI1MzcyMzk1NDc4MTE3ODU5OTc3OTU3NzgxNTQ1MjAzNjE0NDIyMDU3ODcyNDI1Mzg4Mzc5MDM4MTc0MTYxOTMzMDc3MzY0MTYwNTA3ODg4MjE2NzUxMjUwMTczNDc0OTkzNDU5MDAyNDA5ODA4MTY5NDEzNzg1NTM0MjgzMjQyNTY2MTA0NjQ4OTQ0NTA4NTI4NTUzNjY1MDE1OTA3ODk4NzkxMTA2NzY2MTk5OTY2MTA3NjE5OTQ5NzYyNjY4MjcyMzM5OTMxMDY3MDUwMzk0MDAyMjU1NjM3NzcxMDM1ODU1MzY1NTgyMDk4ODYyNTYxMjUwNTc2NDcwNTA0NzQyMDM2MTA3ODY0MjkyMDYyMTE3Nzk3NjI1ODI1NDMzMjQ4NTE3OTI0NTA0NTUwMzA4OTY4MzEyNzgwMzAxMDMxOTY0NjQ1NTQ4MzMzMjQ4MDg4NTkzMDE1OTM3MzU5ODg5Njg4ODYwMTQxNzU3ODYwNDE0OTYzIiwidXIiOm51bGwsImhpZGRlbl9hdHRyaWJ1dGVzIjpbIm1hc3Rlcl9zZWNyZXQiXSwiY29tbWl0dGVkX2F0dHJpYnV0ZXMiOnt9fSwiYmxpbmRlZF9tc19jb3JyZWN0bmVzc19wcm9vZiI6eyJjIjoiNzU0NzI4NDQ3OTk4ODk3MTQ5NTcyMTIyNTI2MDQxOTg2NTQ5NTk1NjQyNTQwNDk0NzY1NzUzNjYwOTM2MTkwMDg4MDQ3MjM3ODI0NzciLCJ2X2Rhc2hfY2FwIjoiMjQxNjU4NjA1NDM1MzU5NDM5Nzg0Nzk3OTIyMTkxODE5NjQ5NDI0MjI1MjYwMzQzMDEyOTY4MDI4NDQ4ODYyNDM0MzY3ODU2NTIwMDI0ODgyODA4ODgzNTkxNTU5MTIxNTUxNDcyNjI0NjM4OTQxMTQ3MTY4NDcxMjYwMzA2OTAwODkwMzk1OTQ3MjAwNzQ2NDYyNzU5MzY2MTM0ODI2NjUyNjg3NTg3ODU1MDY1OTMxOTM0MDY5MTI1NzIyNzI4MjU2ODAyNzE0MzkzMzMzNzk5MjAxMzk1NTI5ODgxOTkxNjExNzM4NzQ5NzgyMzE2NjIwMDE5NDUwODcyMzc4NzU5MDE3NzkwMjM5OTkxOTcwNTYzMDM4NjM4MTIyNTk5NTMyMDI3MTU4NjY5NDQ4OTA2NjI3MDc0NzE3NTc4NzAzMjAxMTkyNTMxMzAwMTU5NTEwMjA3OTY5NTM3NjQ0NzgyNzQyMDQ3MjY2ODk1MTcxNTc0NjU1MzA0MDI0ODIwMDU5NjgyMjIwMzE0NDQ0ODYyNzA5ODkzMDI5NzIwNDYxOTE2NzIyMTQ3NDEzMzI5MTA4NDQ0NTY5NzYyMjg1MTY4MzE0NTkzNjk4MTkyNTAyMzM1MDQ1Mjk1MzIyMzg2MjgzMDIyMzkwMzU1MTUxMzk1MTEzMTEyNjE2Mjc3MTYyNTAxMzgwNDU2NDE1MzIxOTQyMDU1MTQzMTExNTU3MDAzNzY2MzU2MDA3NjIyMzE3Mjc1MjE1NjM3ODEwOTE4NzEwNjgyMTAzMDg3NzQzMDU3NDcxMzQ3MDk1NTg4NTQ3NzkxMTE3NzI5Nzg0MjA5OTQ2NTQ2MDQwMjE2NTIwNDQwODkxNzYwMDEwODIyNDY3NjM3MTE0Nzk2OTI3NTczMjc5NTEyOTEwMzgyNjk0NjMxNjc0NTY2MjMyNDU3NDQzMjg3NDgzOTI4NjI5IiwibV9jYXBzIjp7Im1hc3Rlcl9zZWNyZXQiOiIxMDk1ODM1MjM1OTA4NzM4NjA2MzQwMDgxMTU3NDI1MzIwODMxODQzNzY0MTkyOTg3MDg1NTM5OTMxNjE3MzgwNzk1MDE5ODU1Nzk3MjAxNzE5MDg5MjY5NzI1MDM2MDg3OTIyNDIwODA3ODgxMzQ2Mzg2ODQyNTcyNzAzMTU2MDYxMzQ1MDEwMjAwNTM5ODQwMTkxNTEzNTk3MzU4NDQxOTg5MTE3MjU5MDU4NjM1ODc5OSJ9LCJyX2NhcHMiOnt9fSwibm9uY2UiOiIxMDUwNDQ1MzQ0MzY4MDg5OTAyMDkwNzYyIn0='
      )
    })
  })

  describe('toBase64URL', () => {
    test('encodes JSON object to Base64URL string', () => {
      expect(JsonEncoder.toBase64URL(mockCredentialRequest)).toEqual(
        'eyJwcm92ZXJfZGlkIjoiZGlkOnNvdjo0eFJ3UW9LRUJjTE1SM25pMXVFVnhvIiwiY3JlZF9kZWZfaWQiOiJUTDFFYVBGQ1o4U2k1YVVycVNjQkR0OjM6Q0w6MTMyOlRBRyIsImJsaW5kZWRfbXMiOnsidSI6IjI5OTIzMzU4OTMzMzc4NTk0ODg0MDE2OTQ5MTE2MDE1MDQ4MzYyMTk3OTEwMzEzMTE1NTE3NjE1ODg2NzEyMDAyMjQ3NTQ5ODc3MjAzNzU0MTYxMDQwNjYyMTEzMTkzNjgxMDY3OTcxNzAwODg5MDA1MDU5OTU0NjgwNTYyNTY4NTQzNzA3ODc0NDU1NDYyNzM0NjE0NzcwNzE5ODU3NDc2NTE3NTgzNzMyMTE4MTc1NDcyMTE3MjU4MjYyMjQzNTI0MzcxMDQ3MjQ0NjEyMDI3NjcwNzk1MzQxNTE3Njc4NDA0NTM4Nzc0MzExMjU0ODg4MTI1MzcyMzk1NDc4MTE3ODU5OTc3OTU3NzgxNTQ1MjAzNjE0NDIyMDU3ODcyNDI1Mzg4Mzc5MDM4MTc0MTYxOTMzMDc3MzY0MTYwNTA3ODg4MjE2NzUxMjUwMTczNDc0OTkzNDU5MDAyNDA5ODA4MTY5NDEzNzg1NTM0MjgzMjQyNTY2MTA0NjQ4OTQ0NTA4NTI4NTUzNjY1MDE1OTA3ODk4NzkxMTA2NzY2MTk5OTY2MTA3NjE5OTQ5NzYyNjY4MjcyMzM5OTMxMDY3MDUwMzk0MDAyMjU1NjM3NzcxMDM1ODU1MzY1NTgyMDk4ODYyNTYxMjUwNTc2NDcwNTA0NzQyMDM2MTA3ODY0MjkyMDYyMTE3Nzk3NjI1ODI1NDMzMjQ4NTE3OTI0NTA0NTUwMzA4OTY4MzEyNzgwMzAxMDMxOTY0NjQ1NTQ4MzMzMjQ4MDg4NTkzMDE1OTM3MzU5ODg5Njg4ODYwMTQxNzU3ODYwNDE0OTYzIiwidXIiOm51bGwsImhpZGRlbl9hdHRyaWJ1dGVzIjpbIm1hc3Rlcl9zZWNyZXQiXSwiY29tbWl0dGVkX2F0dHJpYnV0ZXMiOnt9fSwiYmxpbmRlZF9tc19jb3JyZWN0bmVzc19wcm9vZiI6eyJjIjoiNzU0NzI4NDQ3OTk4ODk3MTQ5NTcyMTIyNTI2MDQxOTg2NTQ5NTk1NjQyNTQwNDk0NzY1NzUzNjYwOTM2MTkwMDg4MDQ3MjM3ODI0NzciLCJ2X2Rhc2hfY2FwIjoiMjQxNjU4NjA1NDM1MzU5NDM5Nzg0Nzk3OTIyMTkxODE5NjQ5NDI0MjI1MjYwMzQzMDEyOTY4MDI4NDQ4ODYyNDM0MzY3ODU2NTIwMDI0ODgyODA4ODgzNTkxNTU5MTIxNTUxNDcyNjI0NjM4OTQxMTQ3MTY4NDcxMjYwMzA2OTAwODkwMzk1OTQ3MjAwNzQ2NDYyNzU5MzY2MTM0ODI2NjUyNjg3NTg3ODU1MDY1OTMxOTM0MDY5MTI1NzIyNzI4MjU2ODAyNzE0MzkzMzMzNzk5MjAxMzk1NTI5ODgxOTkxNjExNzM4NzQ5NzgyMzE2NjIwMDE5NDUwODcyMzc4NzU5MDE3NzkwMjM5OTkxOTcwNTYzMDM4NjM4MTIyNTk5NTMyMDI3MTU4NjY5NDQ4OTA2NjI3MDc0NzE3NTc4NzAzMjAxMTkyNTMxMzAwMTU5NTEwMjA3OTY5NTM3NjQ0NzgyNzQyMDQ3MjY2ODk1MTcxNTc0NjU1MzA0MDI0ODIwMDU5NjgyMjIwMzE0NDQ0ODYyNzA5ODkzMDI5NzIwNDYxOTE2NzIyMTQ3NDEzMzI5MTA4NDQ0NTY5NzYyMjg1MTY4MzE0NTkzNjk4MTkyNTAyMzM1MDQ1Mjk1MzIyMzg2MjgzMDIyMzkwMzU1MTUxMzk1MTEzMTEyNjE2Mjc3MTYyNTAxMzgwNDU2NDE1MzIxOTQyMDU1MTQzMTExNTU3MDAzNzY2MzU2MDA3NjIyMzE3Mjc1MjE1NjM3ODEwOTE4NzEwNjgyMTAzMDg3NzQzMDU3NDcxMzQ3MDk1NTg4NTQ3NzkxMTE3NzI5Nzg0MjA5OTQ2NTQ2MDQwMjE2NTIwNDQwODkxNzYwMDEwODIyNDY3NjM3MTE0Nzk2OTI3NTczMjc5NTEyOTEwMzgyNjk0NjMxNjc0NTY2MjMyNDU3NDQzMjg3NDgzOTI4NjI5IiwibV9jYXBzIjp7Im1hc3Rlcl9zZWNyZXQiOiIxMDk1ODM1MjM1OTA4NzM4NjA2MzQwMDgxMTU3NDI1MzIwODMxODQzNzY0MTkyOTg3MDg1NTM5OTMxNjE3MzgwNzk1MDE5ODU1Nzk3MjAxNzE5MDg5MjY5NzI1MDM2MDg3OTIyNDIwODA3ODgxMzQ2Mzg2ODQyNTcyNzAzMTU2MDYxMzQ1MDEwMjAwNTM5ODQwMTkxNTEzNTk3MzU4NDQxOTg5MTE3MjU5MDU4NjM1ODc5OSJ9LCJyX2NhcHMiOnt9fSwibm9uY2UiOiIxMDUwNDQ1MzQ0MzY4MDg5OTAyMDkwNzYyIn0'
      )
    })
  })

  describe('fromBase64', () => {
    test('decodes Base64 string to JSON object', () => {
      expect(
        JsonEncoder.fromBase64(
          'eyJwcm92ZXJfZGlkIjoiZGlkOnNvdjo0eFJ3UW9LRUJjTE1SM25pMXVFVnhvIiwiY3JlZF9kZWZfaWQiOiJUTDFFYVBGQ1o4U2k1YVVycVNjQkR0OjM6Q0w6MTMyOlRBRyIsImJsaW5kZWRfbXMiOnsidSI6IjI5OTIzMzU4OTMzMzc4NTk0ODg0MDE2OTQ5MTE2MDE1MDQ4MzYyMTk3OTEwMzEzMTE1NTE3NjE1ODg2NzEyMDAyMjQ3NTQ5ODc3MjAzNzU0MTYxMDQwNjYyMTEzMTkzNjgxMDY3OTcxNzAwODg5MDA1MDU5OTU0NjgwNTYyNTY4NTQzNzA3ODc0NDU1NDYyNzM0NjE0NzcwNzE5ODU3NDc2NTE3NTgzNzMyMTE4MTc1NDcyMTE3MjU4MjYyMjQzNTI0MzcxMDQ3MjQ0NjEyMDI3NjcwNzk1MzQxNTE3Njc4NDA0NTM4Nzc0MzExMjU0ODg4MTI1MzcyMzk1NDc4MTE3ODU5OTc3OTU3NzgxNTQ1MjAzNjE0NDIyMDU3ODcyNDI1Mzg4Mzc5MDM4MTc0MTYxOTMzMDc3MzY0MTYwNTA3ODg4MjE2NzUxMjUwMTczNDc0OTkzNDU5MDAyNDA5ODA4MTY5NDEzNzg1NTM0MjgzMjQyNTY2MTA0NjQ4OTQ0NTA4NTI4NTUzNjY1MDE1OTA3ODk4NzkxMTA2NzY2MTk5OTY2MTA3NjE5OTQ5NzYyNjY4MjcyMzM5OTMxMDY3MDUwMzk0MDAyMjU1NjM3NzcxMDM1ODU1MzY1NTgyMDk4ODYyNTYxMjUwNTc2NDcwNTA0NzQyMDM2MTA3ODY0MjkyMDYyMTE3Nzk3NjI1ODI1NDMzMjQ4NTE3OTI0NTA0NTUwMzA4OTY4MzEyNzgwMzAxMDMxOTY0NjQ1NTQ4MzMzMjQ4MDg4NTkzMDE1OTM3MzU5ODg5Njg4ODYwMTQxNzU3ODYwNDE0OTYzIiwidXIiOm51bGwsImhpZGRlbl9hdHRyaWJ1dGVzIjpbIm1hc3Rlcl9zZWNyZXQiXSwiY29tbWl0dGVkX2F0dHJpYnV0ZXMiOnt9fSwiYmxpbmRlZF9tc19jb3JyZWN0bmVzc19wcm9vZiI6eyJjIjoiNzU0NzI4NDQ3OTk4ODk3MTQ5NTcyMTIyNTI2MDQxOTg2NTQ5NTk1NjQyNTQwNDk0NzY1NzUzNjYwOTM2MTkwMDg4MDQ3MjM3ODI0NzciLCJ2X2Rhc2hfY2FwIjoiMjQxNjU4NjA1NDM1MzU5NDM5Nzg0Nzk3OTIyMTkxODE5NjQ5NDI0MjI1MjYwMzQzMDEyOTY4MDI4NDQ4ODYyNDM0MzY3ODU2NTIwMDI0ODgyODA4ODgzNTkxNTU5MTIxNTUxNDcyNjI0NjM4OTQxMTQ3MTY4NDcxMjYwMzA2OTAwODkwMzk1OTQ3MjAwNzQ2NDYyNzU5MzY2MTM0ODI2NjUyNjg3NTg3ODU1MDY1OTMxOTM0MDY5MTI1NzIyNzI4MjU2ODAyNzE0MzkzMzMzNzk5MjAxMzk1NTI5ODgxOTkxNjExNzM4NzQ5NzgyMzE2NjIwMDE5NDUwODcyMzc4NzU5MDE3NzkwMjM5OTkxOTcwNTYzMDM4NjM4MTIyNTk5NTMyMDI3MTU4NjY5NDQ4OTA2NjI3MDc0NzE3NTc4NzAzMjAxMTkyNTMxMzAwMTU5NTEwMjA3OTY5NTM3NjQ0NzgyNzQyMDQ3MjY2ODk1MTcxNTc0NjU1MzA0MDI0ODIwMDU5NjgyMjIwMzE0NDQ0ODYyNzA5ODkzMDI5NzIwNDYxOTE2NzIyMTQ3NDEzMzI5MTA4NDQ0NTY5NzYyMjg1MTY4MzE0NTkzNjk4MTkyNTAyMzM1MDQ1Mjk1MzIyMzg2MjgzMDIyMzkwMzU1MTUxMzk1MTEzMTEyNjE2Mjc3MTYyNTAxMzgwNDU2NDE1MzIxOTQyMDU1MTQzMTExNTU3MDAzNzY2MzU2MDA3NjIyMzE3Mjc1MjE1NjM3ODEwOTE4NzEwNjgyMTAzMDg3NzQzMDU3NDcxMzQ3MDk1NTg4NTQ3NzkxMTE3NzI5Nzg0MjA5OTQ2NTQ2MDQwMjE2NTIwNDQwODkxNzYwMDEwODIyNDY3NjM3MTE0Nzk2OTI3NTczMjc5NTEyOTEwMzgyNjk0NjMxNjc0NTY2MjMyNDU3NDQzMjg3NDgzOTI4NjI5IiwibV9jYXBzIjp7Im1hc3Rlcl9zZWNyZXQiOiIxMDk1ODM1MjM1OTA4NzM4NjA2MzQwMDgxMTU3NDI1MzIwODMxODQzNzY0MTkyOTg3MDg1NTM5OTMxNjE3MzgwNzk1MDE5ODU1Nzk3MjAxNzE5MDg5MjY5NzI1MDM2MDg3OTIyNDIwODA3ODgxMzQ2Mzg2ODQyNTcyNzAzMTU2MDYxMzQ1MDEwMjAwNTM5ODQwMTkxNTEzNTk3MzU4NDQxOTg5MTE3MjU5MDU4NjM1ODc5OSJ9LCJyX2NhcHMiOnt9fSwibm9uY2UiOiIxMDUwNDQ1MzQ0MzY4MDg5OTAyMDkwNzYyIn0='
        )
      ).toEqual(mockCredentialRequest)
    })

    test('decodes Base64URL string to JSON object', () => {
      expect(
        JsonEncoder.fromBase64(
          'eyJwcm92ZXJfZGlkIjoiZGlkOnNvdjo0eFJ3UW9LRUJjTE1SM25pMXVFVnhvIiwiY3JlZF9kZWZfaWQiOiJUTDFFYVBGQ1o4U2k1YVVycVNjQkR0OjM6Q0w6MTMyOlRBRyIsImJsaW5kZWRfbXMiOnsidSI6IjI5OTIzMzU4OTMzMzc4NTk0ODg0MDE2OTQ5MTE2MDE1MDQ4MzYyMTk3OTEwMzEzMTE1NTE3NjE1ODg2NzEyMDAyMjQ3NTQ5ODc3MjAzNzU0MTYxMDQwNjYyMTEzMTkzNjgxMDY3OTcxNzAwODg5MDA1MDU5OTU0NjgwNTYyNTY4NTQzNzA3ODc0NDU1NDYyNzM0NjE0NzcwNzE5ODU3NDc2NTE3NTgzNzMyMTE4MTc1NDcyMTE3MjU4MjYyMjQzNTI0MzcxMDQ3MjQ0NjEyMDI3NjcwNzk1MzQxNTE3Njc4NDA0NTM4Nzc0MzExMjU0ODg4MTI1MzcyMzk1NDc4MTE3ODU5OTc3OTU3NzgxNTQ1MjAzNjE0NDIyMDU3ODcyNDI1Mzg4Mzc5MDM4MTc0MTYxOTMzMDc3MzY0MTYwNTA3ODg4MjE2NzUxMjUwMTczNDc0OTkzNDU5MDAyNDA5ODA4MTY5NDEzNzg1NTM0MjgzMjQyNTY2MTA0NjQ4OTQ0NTA4NTI4NTUzNjY1MDE1OTA3ODk4NzkxMTA2NzY2MTk5OTY2MTA3NjE5OTQ5NzYyNjY4MjcyMzM5OTMxMDY3MDUwMzk0MDAyMjU1NjM3NzcxMDM1ODU1MzY1NTgyMDk4ODYyNTYxMjUwNTc2NDcwNTA0NzQyMDM2MTA3ODY0MjkyMDYyMTE3Nzk3NjI1ODI1NDMzMjQ4NTE3OTI0NTA0NTUwMzA4OTY4MzEyNzgwMzAxMDMxOTY0NjQ1NTQ4MzMzMjQ4MDg4NTkzMDE1OTM3MzU5ODg5Njg4ODYwMTQxNzU3ODYwNDE0OTYzIiwidXIiOm51bGwsImhpZGRlbl9hdHRyaWJ1dGVzIjpbIm1hc3Rlcl9zZWNyZXQiXSwiY29tbWl0dGVkX2F0dHJpYnV0ZXMiOnt9fSwiYmxpbmRlZF9tc19jb3JyZWN0bmVzc19wcm9vZiI6eyJjIjoiNzU0NzI4NDQ3OTk4ODk3MTQ5NTcyMTIyNTI2MDQxOTg2NTQ5NTk1NjQyNTQwNDk0NzY1NzUzNjYwOTM2MTkwMDg4MDQ3MjM3ODI0NzciLCJ2X2Rhc2hfY2FwIjoiMjQxNjU4NjA1NDM1MzU5NDM5Nzg0Nzk3OTIyMTkxODE5NjQ5NDI0MjI1MjYwMzQzMDEyOTY4MDI4NDQ4ODYyNDM0MzY3ODU2NTIwMDI0ODgyODA4ODgzNTkxNTU5MTIxNTUxNDcyNjI0NjM4OTQxMTQ3MTY4NDcxMjYwMzA2OTAwODkwMzk1OTQ3MjAwNzQ2NDYyNzU5MzY2MTM0ODI2NjUyNjg3NTg3ODU1MDY1OTMxOTM0MDY5MTI1NzIyNzI4MjU2ODAyNzE0MzkzMzMzNzk5MjAxMzk1NTI5ODgxOTkxNjExNzM4NzQ5NzgyMzE2NjIwMDE5NDUwODcyMzc4NzU5MDE3NzkwMjM5OTkxOTcwNTYzMDM4NjM4MTIyNTk5NTMyMDI3MTU4NjY5NDQ4OTA2NjI3MDc0NzE3NTc4NzAzMjAxMTkyNTMxMzAwMTU5NTEwMjA3OTY5NTM3NjQ0NzgyNzQyMDQ3MjY2ODk1MTcxNTc0NjU1MzA0MDI0ODIwMDU5NjgyMjIwMzE0NDQ0ODYyNzA5ODkzMDI5NzIwNDYxOTE2NzIyMTQ3NDEzMzI5MTA4NDQ0NTY5NzYyMjg1MTY4MzE0NTkzNjk4MTkyNTAyMzM1MDQ1Mjk1MzIyMzg2MjgzMDIyMzkwMzU1MTUxMzk1MTEzMTEyNjE2Mjc3MTYyNTAxMzgwNDU2NDE1MzIxOTQyMDU1MTQzMTExNTU3MDAzNzY2MzU2MDA3NjIyMzE3Mjc1MjE1NjM3ODEwOTE4NzEwNjgyMTAzMDg3NzQzMDU3NDcxMzQ3MDk1NTg4NTQ3NzkxMTE3NzI5Nzg0MjA5OTQ2NTQ2MDQwMjE2NTIwNDQwODkxNzYwMDEwODIyNDY3NjM3MTE0Nzk2OTI3NTczMjc5NTEyOTEwMzgyNjk0NjMxNjc0NTY2MjMyNDU3NDQzMjg3NDgzOTI4NjI5IiwibV9jYXBzIjp7Im1hc3Rlcl9zZWNyZXQiOiIxMDk1ODM1MjM1OTA4NzM4NjA2MzQwMDgxMTU3NDI1MzIwODMxODQzNzY0MTkyOTg3MDg1NTM5OTMxNjE3MzgwNzk1MDE5ODU1Nzk3MjAxNzE5MDg5MjY5NzI1MDM2MDg3OTIyNDIwODA3ODgxMzQ2Mzg2ODQyNTcyNzAzMTU2MDYxMzQ1MDEwMjAwNTM5ODQwMTkxNTEzNTk3MzU4NDQxOTg5MTE3MjU5MDU4NjM1ODc5OSJ9LCJyX2NhcHMiOnt9fSwibm9uY2UiOiIxMDUwNDQ1MzQ0MzY4MDg5OTAyMDkwNzYyIn0'
        )
      ).toEqual(mockCredentialRequest)
    })
  })

  describe('toString', () => {
    test('encodes JSON object to string', () => {
      expect(JsonEncoder.toString(mockCredentialRequest)).toEqual(
        '{"prover_did":"did:sov:4xRwQoKEBcLMR3ni1uEVxo","cred_def_id":"TL1EaPFCZ8Si5aUrqScBDt:3:CL:132:TAG","blinded_ms":{"u":"29923358933378594884016949116015048362197910313115517615886712002247549877203754161040662113193681067971700889005059954680562568543707874455462734614770719857476517583732118175472117258262243524371047244612027670795341517678404538774311254888125372395478117859977957781545203614422057872425388379038174161933077364160507888216751250173474993459002409808169413785534283242566104648944508528553665015907898791106766199966107619949762668272339931067050394002255637771035855365582098862561250576470504742036107864292062117797625825433248517924504550308968312780301031964645548333248088593015937359889688860141757860414963","ur":null,"hidden_attributes":["master_secret"],"committed_attributes":{}},"blinded_ms_correctness_proof":{"c":"75472844799889714957212252604198654959564254049476575366093619008804723782477","v_dash_cap":"241658605435359439784797922191819649424225260343012968028448862434367856520024882808883591559121551472624638941147168471260306900890395947200746462759366134826652687587855065931934069125722728256802714393333799201395529881991611738749782316620019450872378759017790239991970563038638122599532027158669448906627074717578703201192531300159510207969537644782742047266895171574655304024820059682220314444862709893029720461916722147413329108444569762285168314593698192502335045295322386283022390355151395113112616277162501380456415321942055143111557003766356007622317275215637810918710682103087743057471347095588547791117729784209946546040216520440891760010822467637114796927573279512910382694631674566232457443287483928629","m_caps":{"master_secret":"10958352359087386063400811574253208318437641929870855399316173807950198557972017190892697250360879224208078813463868425727031560613450102005398401915135973584419891172590586358799"},"r_caps":{}},"nonce":"1050445344368089902090762"}'
      )
    })
  })

  describe('fromString', () => {
    test('decodes string to JSON object', () => {
      expect(
        JsonEncoder.fromString(
          '{"prover_did":"did:sov:4xRwQoKEBcLMR3ni1uEVxo","cred_def_id":"TL1EaPFCZ8Si5aUrqScBDt:3:CL:132:TAG","blinded_ms":{"u":"29923358933378594884016949116015048362197910313115517615886712002247549877203754161040662113193681067971700889005059954680562568543707874455462734614770719857476517583732118175472117258262243524371047244612027670795341517678404538774311254888125372395478117859977957781545203614422057872425388379038174161933077364160507888216751250173474993459002409808169413785534283242566104648944508528553665015907898791106766199966107619949762668272339931067050394002255637771035855365582098862561250576470504742036107864292062117797625825433248517924504550308968312780301031964645548333248088593015937359889688860141757860414963","ur":null,"hidden_attributes":["master_secret"],"committed_attributes":{}},"blinded_ms_correctness_proof":{"c":"75472844799889714957212252604198654959564254049476575366093619008804723782477","v_dash_cap":"241658605435359439784797922191819649424225260343012968028448862434367856520024882808883591559121551472624638941147168471260306900890395947200746462759366134826652687587855065931934069125722728256802714393333799201395529881991611738749782316620019450872378759017790239991970563038638122599532027158669448906627074717578703201192531300159510207969537644782742047266895171574655304024820059682220314444862709893029720461916722147413329108444569762285168314593698192502335045295322386283022390355151395113112616277162501380456415321942055143111557003766356007622317275215637810918710682103087743057471347095588547791117729784209946546040216520440891760010822467637114796927573279512910382694631674566232457443287483928629","m_caps":{"master_secret":"10958352359087386063400811574253208318437641929870855399316173807950198557972017190892697250360879224208078813463868425727031560613450102005398401915135973584419891172590586358799"},"r_caps":{}},"nonce":"1050445344368089902090762"}'
        )
      ).toEqual(mockCredentialRequest)
    })
  })

  describe('toBuffer', () => {
    test('encodes buffer to JSON object', () => {
      const expected = Buffer.from(
        '{"prover_did":"did:sov:4xRwQoKEBcLMR3ni1uEVxo","cred_def_id":"TL1EaPFCZ8Si5aUrqScBDt:3:CL:132:TAG","blinded_ms":{"u":"29923358933378594884016949116015048362197910313115517615886712002247549877203754161040662113193681067971700889005059954680562568543707874455462734614770719857476517583732118175472117258262243524371047244612027670795341517678404538774311254888125372395478117859977957781545203614422057872425388379038174161933077364160507888216751250173474993459002409808169413785534283242566104648944508528553665015907898791106766199966107619949762668272339931067050394002255637771035855365582098862561250576470504742036107864292062117797625825433248517924504550308968312780301031964645548333248088593015937359889688860141757860414963","ur":null,"hidden_attributes":["master_secret"],"committed_attributes":{}},"blinded_ms_correctness_proof":{"c":"75472844799889714957212252604198654959564254049476575366093619008804723782477","v_dash_cap":"241658605435359439784797922191819649424225260343012968028448862434367856520024882808883591559121551472624638941147168471260306900890395947200746462759366134826652687587855065931934069125722728256802714393333799201395529881991611738749782316620019450872378759017790239991970563038638122599532027158669448906627074717578703201192531300159510207969537644782742047266895171574655304024820059682220314444862709893029720461916722147413329108444569762285168314593698192502335045295322386283022390355151395113112616277162501380456415321942055143111557003766356007622317275215637810918710682103087743057471347095588547791117729784209946546040216520440891760010822467637114796927573279512910382694631674566232457443287483928629","m_caps":{"master_secret":"10958352359087386063400811574253208318437641929870855399316173807950198557972017190892697250360879224208078813463868425727031560613450102005398401915135973584419891172590586358799"},"r_caps":{}},"nonce":"1050445344368089902090762"}'
      )

      expect(JsonEncoder.toBuffer(mockCredentialRequest).equals(expected)).toBe(true)
    })
  })

  describe('fromBuffer', () => {
    test('decodes JSON object to buffer', () => {
      const buffer = Buffer.from(
        '{"prover_did":"did:sov:4xRwQoKEBcLMR3ni1uEVxo","cred_def_id":"TL1EaPFCZ8Si5aUrqScBDt:3:CL:132:TAG","blinded_ms":{"u":"29923358933378594884016949116015048362197910313115517615886712002247549877203754161040662113193681067971700889005059954680562568543707874455462734614770719857476517583732118175472117258262243524371047244612027670795341517678404538774311254888125372395478117859977957781545203614422057872425388379038174161933077364160507888216751250173474993459002409808169413785534283242566104648944508528553665015907898791106766199966107619949762668272339931067050394002255637771035855365582098862561250576470504742036107864292062117797625825433248517924504550308968312780301031964645548333248088593015937359889688860141757860414963","ur":null,"hidden_attributes":["master_secret"],"committed_attributes":{}},"blinded_ms_correctness_proof":{"c":"75472844799889714957212252604198654959564254049476575366093619008804723782477","v_dash_cap":"241658605435359439784797922191819649424225260343012968028448862434367856520024882808883591559121551472624638941147168471260306900890395947200746462759366134826652687587855065931934069125722728256802714393333799201395529881991611738749782316620019450872378759017790239991970563038638122599532027158669448906627074717578703201192531300159510207969537644782742047266895171574655304024820059682220314444862709893029720461916722147413329108444569762285168314593698192502335045295322386283022390355151395113112616277162501380456415321942055143111557003766356007622317275215637810918710682103087743057471347095588547791117729784209946546040216520440891760010822467637114796927573279512910382694631674566232457443287483928629","m_caps":{"master_secret":"10958352359087386063400811574253208318437641929870855399316173807950198557972017190892697250360879224208078813463868425727031560613450102005398401915135973584419891172590586358799"},"r_caps":{}},"nonce":"1050445344368089902090762"}'
      )

      expect(JsonEncoder.fromBuffer(buffer)).toEqual(mockCredentialRequest)
    })
  })
})
