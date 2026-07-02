from openai import OpenAI

client = OpenAI(
    base_url="https://api.featherless.ai/v1",
    api_key="rc_5c6f83394786c8e5181afabeb6cecb538981b8121bf8c6cc326edb6c4133c3a1",
)

response = client.chat.completions.create(
    model="zai-org/GLM-5.2",
    max_tokens=4096,
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is the fastest way to get to the airport?"},
    ],
)

print(response.choices[0].message.content)