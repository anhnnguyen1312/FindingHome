# Sử dụng hình ảnh chính thức của Python
FROM python:3.12-slim

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép các file yêu cầu vào thư mục làm việc
COPY . /app

# Cài đặt các package từ file requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Đảm bảo start.sh có quyền thực thi
RUN chmod +x start.sh

# Lệnh chạy khi container khởi động
CMD ["/app/start.sh"]
